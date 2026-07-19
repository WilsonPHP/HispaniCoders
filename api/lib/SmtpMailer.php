<?php

declare(strict_types=1);

final class SmtpMailer
{
    private string $host;
    private int $port;
    private string $username;
    private string $password;
    private int $timeout;

    public function __construct(string $host, int $port, string $username, string $password, int $timeout = 20)
    {
        $this->host = $host;
        $this->port = $port;
        $this->username = $username;
        $this->password = $password;
        $this->timeout = $timeout;
    }

    public function send(
        string $fromEmail,
        string $fromName,
        string $toEmail,
        string $subject,
        string $htmlBody,
        string $textBody,
        string $replyToEmail = '',
        string $replyToName = ''
    ): void {
        $socket = @stream_socket_client(
            sprintf('ssl://%s:%d', $this->host, $this->port),
            $errorCode,
            $errorMessage,
            $this->timeout
        );

        if (!is_resource($socket)) {
            throw new RuntimeException(sprintf('SMTP connection failed (%d): %s', $errorCode, $errorMessage));
        }

        stream_set_timeout($socket, $this->timeout);

        try {
            $this->expectCode($socket, [220]);
            $this->command($socket, 'EHLO hispanicoders.com', [250]);
            $this->command($socket, 'AUTH LOGIN', [334]);
            $this->command($socket, base64_encode($this->username), [334]);
            $this->command($socket, base64_encode($this->password), [235]);

            $this->command($socket, sprintf('MAIL FROM:<%s>', $fromEmail), [250]);
            $this->command($socket, sprintf('RCPT TO:<%s>', $toEmail), [250, 251]);
            $this->command($socket, 'DATA', [354]);

            $boundary = '=_HISPANICODERS_' . bin2hex(random_bytes(8));

            $headers = [
                'From: ' . $this->formatAddress($fromEmail, $fromName),
                'To: ' . $this->formatAddress($toEmail, 'HispaniCoders Contact'),
                'Subject: ' . $this->encodeHeader($subject),
                'Date: ' . gmdate('D, d M Y H:i:s') . ' +0000',
                'Message-ID: <' . bin2hex(random_bytes(12)) . '@hispanicoders.com>',
                'MIME-Version: 1.0',
                'Content-Type: multipart/alternative; boundary="' . $boundary . '"',
            ];

            if ($replyToEmail !== '') {
                $headers[] = 'Reply-To: ' . $this->formatAddress($replyToEmail, $replyToName);
            }

            $bodyLines = [];
            $bodyLines[] = '--' . $boundary;
            $bodyLines[] = 'Content-Type: text/plain; charset=UTF-8';
            $bodyLines[] = 'Content-Transfer-Encoding: 8bit';
            $bodyLines[] = '';
            $bodyLines[] = $this->normalizeBody($textBody);
            $bodyLines[] = '--' . $boundary;
            $bodyLines[] = 'Content-Type: text/html; charset=UTF-8';
            $bodyLines[] = 'Content-Transfer-Encoding: 8bit';
            $bodyLines[] = '';
            $bodyLines[] = $this->normalizeBody($htmlBody);
            $bodyLines[] = '--' . $boundary . '--';

            $messageData = implode("\r\n", array_merge($headers, [''], $bodyLines));
            $messageData = preg_replace('/(^|\r\n)\./', '$1..', $messageData) ?? $messageData;

            fwrite($socket, $messageData . "\r\n.\r\n");
            $this->expectCode($socket, [250]);
            $this->command($socket, 'QUIT', [221]);
        } finally {
            fclose($socket);
        }
    }

    private function command($socket, string $command, array $expectedCodes): void
    {
        fwrite($socket, $command . "\r\n");
        $this->expectCode($socket, $expectedCodes);
    }

    private function expectCode($socket, array $expectedCodes): void
    {
        $response = '';

        while (($line = fgets($socket, 515)) !== false) {
            $response .= $line;

            if (strlen($line) >= 4 && $line[3] === ' ') {
                break;
            }
        }

        if ($response === '') {
            throw new RuntimeException('Empty response from SMTP server');
        }

        $code = (int)substr($response, 0, 3);
        if (!in_array($code, $expectedCodes, true)) {
            throw new RuntimeException(trim($response));
        }
    }

    private function formatAddress(string $email, string $name): string
    {
        $safeName = trim($name);
        if ($safeName === '') {
            return $email;
        }

        return sprintf('"%s" <%s>', addcslashes($safeName, '"\\'), $email);
    }

    private function encodeHeader(string $value): string
    {
        return '=?UTF-8?B?' . base64_encode($value) . '?=';
    }

    private function normalizeBody(string $body): string
    {
        $normalized = str_replace(["\r\n", "\r"], "\n", trim($body));
        return str_replace("\n", "\r\n", $normalized);
    }
}

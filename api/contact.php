<?php

declare(strict_types=1);

require_once __DIR__ . '/lib/SmtpMailer.php';

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'ok' => false,
        'message' => 'Method not allowed',
    ]);
    exit;
}

$rawBody = file_get_contents('php://input');
$payload = json_decode($rawBody ?: '{}', true);

if (!is_array($payload)) {
    http_response_code(400);
    echo json_encode([
        'ok' => false,
        'message' => 'Invalid JSON payload',
    ]);
    exit;
}

$fullName = trim((string)($payload['fullName'] ?? ''));
$workEmail = trim((string)($payload['workEmail'] ?? ''));
$company = trim((string)($payload['company'] ?? ''));
$message = trim((string)($payload['message'] ?? ''));

if ($fullName === '' || $workEmail === '' || $company === '' || $message === '') {
    http_response_code(422);
    echo json_encode([
        'ok' => false,
        'message' => 'All fields are required',
    ]);
    exit;
}

if (!filter_var($workEmail, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode([
        'ok' => false,
        'message' => 'Please provide a valid work email address',
    ]);
    exit;
}

$config = require __DIR__ . '/smtp_config.php';

$safeName = htmlspecialchars($fullName, ENT_QUOTES, 'UTF-8');
$safeEmail = htmlspecialchars($workEmail, ENT_QUOTES, 'UTF-8');
$safeCompany = htmlspecialchars($company, ENT_QUOTES, 'UTF-8');
$safeMessage = nl2br(htmlspecialchars($message, ENT_QUOTES, 'UTF-8'));

$subject = sprintf('New contact request from %s', $fullName);
$plainTextBody = implode("\n\n", [
    'New contact request received from Hispanicoders website.',
    'Full Name: ' . $fullName,
    'Work Email: ' . $workEmail,
    'Company: ' . $company,
    'Message:',
    $message,
]);

$htmlBody = <<<HTML
<html>
  <body style="font-family: Arial, sans-serif; color: #1f2937;">
    <h2 style="margin-bottom: 16px;">New contact request</h2>
    <p><strong>Full Name:</strong> {$safeName}</p>
    <p><strong>Work Email:</strong> {$safeEmail}</p>
    <p><strong>Company:</strong> {$safeCompany}</p>
    <p><strong>Message:</strong><br>{$safeMessage}</p>
  </body>
</html>
HTML;

try {
    $mailer = new SmtpMailer(
        (string)$config['host'],
        (int)$config['port'],
        (string)$config['username'],
        (string)$config['password']
    );

    $mailer->send(
        (string)$config['from_email'],
        (string)$config['from_name'],
        (string)$config['to_email'],
        $subject,
        $htmlBody,
        $plainTextBody,
        $workEmail,
        $fullName
    );
} catch (Throwable $exception) {
    error_log(
        sprintf(
            '[HispaniCoders][contact] SMTP error: %s | from=%s | company=%s',
            $exception->getMessage(),
            $workEmail,
            $company
        )
    );

    http_response_code(500);
    echo json_encode([
        'ok' => false,
        'message' => 'We could not process your request at this time. Please try again shortly.',
    ]);
    exit;
}

echo json_encode([
    'ok' => true,
    'message' => 'Thank you. Your request was sent successfully.',
]);
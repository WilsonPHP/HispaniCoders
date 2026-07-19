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

$companyName = trim((string)($payload['companyName'] ?? ''));
$workEmail = trim((string)($payload['workEmail'] ?? ''));
$rolesNeeded = trim((string)($payload['rolesNeeded'] ?? ''));
$timeframe = trim((string)($payload['timeframe'] ?? ''));
$details = trim((string)($payload['details'] ?? ''));

if ($companyName === '' || $workEmail === '' || $rolesNeeded === '' || $timeframe === '') {
    http_response_code(422);
    echo json_encode([
        'ok' => false,
        'message' => 'Missing required fields',
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

$safeCompany = htmlspecialchars($companyName, ENT_QUOTES, 'UTF-8');
$safeEmail = htmlspecialchars($workEmail, ENT_QUOTES, 'UTF-8');
$safeRoles = htmlspecialchars($rolesNeeded, ENT_QUOTES, 'UTF-8');
$safeTimeframe = htmlspecialchars($timeframe, ENT_QUOTES, 'UTF-8');
$safeDetails = nl2br(htmlspecialchars($details, ENT_QUOTES, 'UTF-8'));

$subject = sprintf('New talent request from %s', $companyName);

$plainTextBody = implode("\n\n", [
    'New talent request received from Hispanicoders website.',
    'Company: ' . $companyName,
    'Work Email: ' . $workEmail,
    'Roles Needed: ' . $rolesNeeded,
    'Timeframe: ' . $timeframe,
    'Details:',
    $details !== '' ? $details : 'N/A',
]);

$htmlBody = <<<HTML
<html>
  <body style="font-family: Arial, sans-serif; color: #1f2937;">
    <h2 style="margin-bottom: 16px;">New talent request</h2>
    <p><strong>Company:</strong> {$safeCompany}</p>
    <p><strong>Work Email:</strong> {$safeEmail}</p>
    <p><strong>Roles Needed:</strong> {$safeRoles}</p>
    <p><strong>Timeframe:</strong> {$safeTimeframe}</p>
    <p><strong>Details:</strong><br>{$safeDetails}</p>
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
        $companyName
    );
} catch (Throwable $exception) {
    error_log(
        sprintf(
            '[HispaniCoders][request-talent] SMTP error: %s | from=%s | company=%s',
            $exception->getMessage(),
            $workEmail,
            $companyName
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
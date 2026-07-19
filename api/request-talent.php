<?php

declare(strict_types=1);

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

if ($companyName === '' || $workEmail === '' || $rolesNeeded === '' || $timeframe === '') {
    http_response_code(422);
    echo json_encode([
        'ok' => false,
        'message' => 'Missing required fields',
    ]);
    exit;
}

echo json_encode([
    'ok' => true,
    'message' => 'Talent request received',
]);
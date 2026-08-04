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

$file = $_POST['file'] ?? '';
$safeFile = basename((string) $file);
$ts = trim((string) ($_POST['ts'] ?? ''));
$sig = trim((string) ($_POST['sig'] ?? ''));

if ($safeFile === '' || $ts === '' || $sig === '' || !ctype_digit($ts)) {
    http_response_code(400);
    echo json_encode([
        'ok' => false,
        'message' => 'Invalid request',
    ]);
    exit;
}

$now = time();
$requestTs = (int) $ts;
if (abs($now - $requestTs) > 300) {
    http_response_code(403);
    echo json_encode([
        'ok' => false,
        'message' => 'Expired signature',
    ]);
    exit;
}

$deleteSigningKey = 'hispanicoders-delete-v1';
$expectedSig = hash_hmac('sha256', $safeFile . '|' . $ts, $deleteSigningKey);
if (!hash_equals($expectedSig, $sig)) {
    http_response_code(403);
    echo json_encode([
        'ok' => false,
        'message' => 'Invalid signature',
    ]);
    exit;
}

$deletedSomething = false;

$cvPath = __DIR__ . '/storage/cvs/' . $safeFile;
if (is_file($cvPath) && @unlink($cvPath)) {
    $deletedSomething = true;
}

$submissionsPath = __DIR__ . '/storage/cv_submissions.json';
if (is_file($submissionsPath)) {
    $json = file_get_contents($submissionsPath);
    $entries = json_decode((string) $json, true);
    if (is_array($entries)) {
        $beforeCount = count($entries);
        $entries = array_values(array_filter($entries, static function ($entry) use ($safeFile) {
            return (string) ($entry['cv_file'] ?? '') !== $safeFile;
        }));

        if ($beforeCount !== count($entries)) {
            $saved = file_put_contents($submissionsPath, json_encode($entries, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE), LOCK_EX);
            if ($saved !== false) {
                $deletedSomething = true;
            }
        }
    }
}

if (!$deletedSomething) {
    http_response_code(404);
    echo json_encode([
        'ok' => false,
        'message' => 'File not found',
    ]);
    exit;
}

echo json_encode([
    'ok' => true,
    'message' => 'CV deleted',
]);

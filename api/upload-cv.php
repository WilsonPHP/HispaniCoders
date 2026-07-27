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

// Validate honeypot
$website = $_POST['website'] ?? '';
if (!empty($website)) {
    http_response_code(400);
    echo json_encode([
        'ok' => false,
        'message' => 'Form submission rejected',
    ]);
    exit;
}

// Validate required fields
$fullName = trim((string)($_POST['fullName'] ?? ''));
$email = trim((string)($_POST['email'] ?? ''));

if (empty($fullName) || empty($email)) {
    http_response_code(400);
    echo json_encode([
        'ok' => false,
        'message' => 'Missing required fields',
    ]);
    exit;
}

// Validate email format
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode([
        'ok' => false,
        'message' => 'Invalid email address',
    ]);
    exit;
}

// Check if file was uploaded
if (!isset($_FILES['cv']) || $_FILES['cv']['error'] !== UPLOAD_ERR_OK) {
    http_response_code(400);
    echo json_encode([
        'ok' => false,
        'message' => 'No CV file uploaded or upload failed',
    ]);
    exit;
}

$cvFile = $_FILES['cv'];
$allowedMimes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];

if (!in_array($cvFile['type'], $allowedMimes, true)) {
    http_response_code(400);
    echo json_encode([
        'ok' => false,
        'message' => 'Invalid file type. Only PDF, DOC, and DOCX are allowed.',
    ]);
    exit;
}

if ($cvFile['size'] > 5 * 1024 * 1024) { // 5MB max
    http_response_code(400);
    echo json_encode([
        'ok' => false,
        'message' => 'File too large. Maximum 5MB.',
    ]);
    exit;
}

// Create uploads directory if it doesn't exist
$uploadsDir = __DIR__ . '/storage/cvs';
if (!is_dir($uploadsDir)) {
    if (!mkdir($uploadsDir, 0777, true)) {
        http_response_code(500);
        echo json_encode([
            'ok' => false,
            'message' => 'Failed to create uploads directory',
        ]);
        exit;
    }
}

// Generate unique filename
$fileExt = pathinfo($cvFile['name'], PATHINFO_EXTENSION);
$fileName = md5($email . time()) . '.' . $fileExt;
$filePath = $uploadsDir . '/' . $fileName;

// Move uploaded file
if (!move_uploaded_file($cvFile['tmp_name'], $filePath)) {
    http_response_code(500);
    echo json_encode([
        'ok' => false,
        'message' => 'Failed to save CV file',
    ]);
    exit;
}

// Save submission record
$submissionsFile = __DIR__ . '/storage/cv_submissions.json';
$submissions = [];

if (file_exists($submissionsFile)) {
    $json = file_get_contents($submissionsFile);
    $submissions = json_decode($json, true) ?: [];
}

$submissions[] = [
    'timestamp' => date('Y-m-d H:i:s'),
    'fullName' => $fullName,
    'email' => $email,
    'cv_file' => $fileName,
    'ip_address' => $_SERVER['REMOTE_ADDR'] ?? '',
];

file_put_contents($submissionsFile, json_encode($submissions, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));

echo json_encode([
    'ok' => true,
    'message' => 'CV submitted successfully. We will review it and contact you soon.',
]);

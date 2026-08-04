<?php
/**
 * Router for the PHP development server
 * Routes /api/* requests to the appropriate handlers
 */

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

// Remove /api prefix and clean up the path
$path = preg_replace('|^/api|', '', $uri);
if (empty($path)) {
    $path = '/';
}

// Route mapping
$routes = [
    '/upload-cv.php' => 'upload-cv.php',
    '/delete-cv.php' => 'delete-cv.php',
    '/contact.php' => 'contact.php',
];

// Check if the file exists
foreach ($routes as $route => $file) {
    if ($path === $route || $path === $route . '/') {
        if (file_exists(__DIR__ . '/' . $file)) {
            require __DIR__ . '/' . $file;
            exit;
        }
    }
}

// If no route matched, return 404
http_response_code(404);
echo json_encode(['ok' => false, 'message' => 'Not Found']);

<?php

declare(strict_types=1);

$gmailUsername = (string)(getenv('HISPANICODERS_GMAIL_USERNAME') ?: 'contact@hispanicoders.com');
$gmailAppPassword = (string)(getenv('HISPANICODERS_GMAIL_APP_PASSWORD') ?: '');

return [
    'host' => 'smtp.gmail.com',
    'port' => 465,
    'username' => $gmailUsername,
    'password' => $gmailAppPassword,
    'to_email' => 'contact@hispanicoders.com',
    'to_name' => 'HispaniCoders Contact',
    'from_email' => 'contact@hispanicoders.com',
    'from_name' => 'HispaniCoders Website',
];

<?php
session_start();

if (!isset($_SESSION['likes'])) {
    $_SESSION['likes'] = 0;
}

if (isset($_GET['action']) && $_GET['action'] === 'like') {
    $_SESSION['likes'] += 1;
}

header('Content-Type: application/json');
echo json_encode(['likes' => $_SESSION['likes']]);

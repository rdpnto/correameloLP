<?php

$request = $_SERVER['REQUEST_URI'];

switch ($request) {
    case '/' :
        require __DIR__ . '/index.html';
        break;
    case '' :
        require __DIR__ . '/index.html';
        break;
    case '/lp' :
        require __DIR__ . '/lp.html';
        break;
    default:
        http_response_code(404);
        require __DIR__ . '/404.html';
        break;
}
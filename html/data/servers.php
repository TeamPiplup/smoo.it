<?php
$servers = [
  'all',
  'piplup.smoo.it:1027',
];

$file = basename($_SERVER['REQUEST_URI'] ?? '');
if (! $file) { exit; }

$server = substr($file, 0, -5);
if (! $server) { exit; }
if ($server === 'servers') { $server = 'all'; }

if (! in_array($server, $servers)) { exit('unknown server'); }

$response = trim(@shell_exec(__DIR__ . "/servers.sh $server"));
header('Content-Type: application/json; charset=utf-8');
echo $response;
exit;

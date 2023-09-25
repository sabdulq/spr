<?php
$csvFilePath = 'documents/cwd.csv';

if (file_exists($csvFilePath)) {
    header('Content-Type: text/plain');
    readfile($csvFilePath);
} else {
    http_response_code(404);
    echo 'CSV file not found.';
}
?>

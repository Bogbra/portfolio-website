<?php

$subject = $_POST['name'];
$from = $_POST['email'];
$message = "Your MSG <br>\n";
$to = "info@example.de";

if (empty($subject) || empty($from) || empty($message)) {
    die("Invalid inputs");
}

$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=UTF-8\r\n";
$headers .= "From: " . $from;

mail($to, $subject, $message, $headers);
echo "Mail Sent.";


<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];  

$recipient = "example@example.com";

$header = "From: $name\n E-Mail: $email\n Message:\n $message";

mail($recipient, $message, $header) or die("Error");
echo "Mail Sent.";

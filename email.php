<?php

$subject = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];  

$recipient = "example@example.com";

$header = "From: <".$email. ">" ;

mail($recipient, $message, $header) or die("Error");
echo "Mail Sent.";

?>

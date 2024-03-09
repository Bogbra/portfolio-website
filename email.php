<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];  

$recipient = "example@example.com";

		if (!$_POST['name']) {
			$errName = 'Please enter your name';
		}

		if (!$_POST['email'] || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
			$errEmail = 'Please enter a valid email address';
		}
		
		if (!$_POST['message']) {
			$errMessage = 'Please enter your message';
		}

$header = "From: $name\n E-Mail: $email\n Message:\n $message";

mail($recipient, $message, $header) or die("Error");
echo "Mail Sent.";

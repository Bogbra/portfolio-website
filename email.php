<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = filter_var($_POST["name"], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $message = filter_var($_POST["message"], FILTER_SANITIZE_STRING);

    if (empty($name) || empty($email) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Invalid inputs");
    }

    $ip = $_SERVER['REMOTE_ADDR'];
    $key = 'email_limit_' . $ip;
    $limit = 5;
    $expire = 3600;

    $count = apcu_fetch($key);
    if ($count === false) {
        $count = 0;
    }

    if ($count < $limit) {
        $to = "bogdana.braichenko@web.de";
        $subject = "New contact request from $name";
        $headers = "From: $email";

        mail($to, $subject, $message, $headers);

        $count++;
        apcu_store($key, $count, $expire);
    } else {
        die("Too many requests. Please try again later.");
    }
}

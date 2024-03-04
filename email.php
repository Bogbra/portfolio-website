<?php 
if(isset($_POST['submit'])){
    $to = "info@example.de";
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $name . " wrote the following:" . "\n\n" . $_POST['message'];
  
      if (empty($name) || empty($email) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Invalid inputs");
    }

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    echo "Thank you " . $name . ", we will contact you shortly.";
    }

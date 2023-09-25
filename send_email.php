<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $company = $_POST["company"];
  $subject = $_POST["subject"];
  $message = $_POST["message"];
  
  // Add code here to send the email to your desired email address
  $to = "saifabdulqadeer@gmail.com";
  $headers = "From: " . $name . " <" . $to . ">\r\n";
  mail($to, $subject, $message, $headers);
}
?>

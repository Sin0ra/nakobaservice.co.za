<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

  $name = htmlspecialchars($_POST['name'] ?? '');
  $email = htmlspecialchars($_POST['email'] ?? '');
  $phone = htmlspecialchars($_POST['phone'] ?? '');
  $message = htmlspecialchars($_POST['message'] ?? '');

  $to = "info@nakobaservices.co.za";
  $subject = "New Contact Message";

  $body = "You have received a new message:\n\n";
  $body .= "Name: $name\n";
  $body .= "Email: $email\n";
  $body .= "Phone: $phone\n\n";
  $body .= "Message:\n$message";

  // ⚠️ IMPORTANT FIX HERE
  $headers = "From: Nakoba Services <info@nakobaservices.co.za>\r\n";
  $headers .= "Reply-To: $email\r\n";

  if (mail($to, $subject, $body, $headers)) {
      echo "✅ Message sent successfully!";
  } else {
      echo "❌ Failed to send message.";
  }

} else {
  echo "Invalid request.";
}

?>

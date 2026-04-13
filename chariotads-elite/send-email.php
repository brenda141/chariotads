<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $input = file_get_contents("php://input");
    $data = json_decode($input, true);

    $name = strip_tags($data['name'] ?? 'No Name');
    $email = filter_var($data['email'] ?? '', FILTER_VALIDATE_EMAIL);
    $subject = strip_tags($data['subject'] ?? 'New Contact Form Submission');
    $message = strip_tags($data['message'] ?? 'No Message');

    if (!$email) {
        echo json_encode(["ok" => false, "error" => "Invalid email address."]);
        exit;
    }

    $to = "support@chariotads.com";
    $headers = "From: ChariotAds Support <support@chariotads.com>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    $email_content = "
        <h2>New Message from ChariotAds Contact Form</h2>
        <p><strong>Name:</strong> $name</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Subject:</strong> $subject</p>
        <p><strong>Message:</strong><br>$message</p>
    ";

    if (mail($to, $subject, $email_content, $headers)) {
        echo json_encode(["ok" => true]);
    } else {
        echo json_encode(["ok" => false, "error" => "PHP mail() function failed. You may need to configure SMTP on your server."]);
    }
} else {
    echo json_encode(["ok" => false, "error" => "Invalid request method."]);
}
?>

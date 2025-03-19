<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = htmlspecialchars($_POST['name']);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars($_POST['message']);

    // Aquí puedes agregar la lógica para enviar el correo o guardar en la base de datos
    // Por ejemplo, enviar un correo:
    $to = 'tuemail@example.com';
    $subject = 'Nuevo mensaje de contacto';
    $body = "Nombre: $name\nEmail: $email\nMensaje: $message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo 'Mensaje enviado con éxito';
    } else {
        echo 'Error al enviar el mensaje';
    }
}
?>
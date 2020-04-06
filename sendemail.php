<?php

require_once('phpmail/class.phpmailer.php');
require_once('phpmail/class.smtp.php');
require_once('phpmail/PHPMailerAutoload.php');


$mail = new PHPMailer(); // defaults to using php "mail()"

//SMTP CONFIG
$mail->IsSMTP(); // Define que a mensagem será SMTP
$mail->Host = "smtp.correamelo.com.br"; // Seu endereço de host SMTP
$mail->SMTPAuth = true; // Define que será utilizada a autenticação -  Mantenha o valor "true"
$mail->Port = 587; // Porta de comunicação SMTP - Mantenha o valor "587"
$mail->SMTPSecure = false; // Define se é utilizado SSL/TLS - Mantenha o valor "false"
$mail->SMTPAutoTLS = false; // Define se, por padrão, será utilizado TLS - Mantenha o valor "false"
$mail->Username = 'contato@correamelo.com.br'; // Conta de email existente e ativa em seu domínio
$mail->Password = 'Contato12@'; // Senha da sua conta de email

// DADOS DO REMETENTE
$mail->Sender = "contato@correamelo.com.br"; // Conta de email existente e ativa em seu domínio
$mail->From = "contato@correamelo.com.br"; // Sua conta de email que será remetente da mensagem
$mail->FromName = "CorreaMelo"; // Nome da conta de email
// $mail->SetFrom('name@yourdomain.com', 'First Last');

// DADOS DO DESTINATÁRIO
$mail->AddAddress('contato@correamelo.com.br', 'CorreaMelo');
$mail->IsHTML(true);
$mail->CharSet = 'utf-8';

//CRIANDO VARIÁVEIS
$name = $_POST['name'];
$from = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

//CORPO DA MENSAGEM
// $name = "Fulano";
// $from = "ciclano@teste.com";
// $phone = "phone";
// $message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
$body = "<strong>Cliente:</strong> $name <br><strong>Email:</strong> $from <br><strong>Telefone:</strong> $phone <br><br><strong>Mensagem enviada pelo cliente: </strong><br> <p style='text-align: justify;'>$message</p>";

//ENVIO
$mail->Subject = "Formulário de Contato";
$mail->AddReplyTo("$from","$name");
$mail->MsgHTML($body);
if(!$mail->Send()) {
  echo "Mailer Error: " . $mail->ErrorInfo;
} else {
  echo "Message sent!";
}

?>
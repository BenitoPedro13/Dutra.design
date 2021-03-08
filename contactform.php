<?php

if (isset($_POST['enviar'])) {
  $nome = $_POST['nome'];
  $assunto = $_POST['assunto'];
  $emailDe = $_POST['email'];
  $mensagem = $_POST['mensagem'];

  $emailPara = "contato@dutra.design";
  $headers = "From: ".$emailDe;
  $txt = "Você recebeu um e-mail de ".$nome.".\n\n".$mensagem;

  mail($emailPara, $assunto, $txt, $headers);
  header("Location: contato.html?mailsend");
}

<?php

	header('Content-Type: text/html; charset=UTF-8');

	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require 'path/to/PHPMailer/src/Exception.php';
	require 'path/to/PHPMailer/src/PHPMailer.php';
	require 'path/to/PHPMailer/src/SMTP.php';
	
	if(isset($_POST['contato_nome'])){

		$nome_contato = $_POST['contato_nome'];
		$telefone_contato = $_POST['contato_numero'];
		$mensagem_contato = $_POST['contato_mensagem'];
		if($_POST['contato_email'] == ''){
			$email_contato = "Não deixou e-mail";
		}
		else{
			$email_contato = $_POST['contato_email'];
		}

		$mail = new PHPMailer(true);                              // Passing `true` enables exceptions
		try {

			// To load the French version
			$mail->setLanguage('pt_br', '/path/to/PHPMailer/language/');

		    //Server settings
		    $mail->SMTPDebug = 2;                                 // Enable verbose debug output
		    $mail->isSMTP();                                      // Set mailer to use SMTP
		    $mail->Host = 'mail.rhaiters.com.br';  // Specify main and backup SMTP servers
		    $mail->SMTPAuth = true;                               // Enable SMTP authentication
		    $mail->Username = 'formulario_site@rhaiters.com.br';                 // SMTP username
		    $mail->Password = 'Nânânah-a-senha-não-esta-aqui';                           // SMTP password
		    $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
		    $mail->Port = 465;                                 // TCP port to connect to

		    //Recipients
		    $mail->setFrom('formulario_site@rhaiters.com.br', 'Formulário Site');
		    $mail->addAddress('atendimento@rhaiters.com.br');               // Name is optional

		    //Content
		    $mail->isHTML(true);                                  // Set email format to HTML
		    $mail->CharSet = 'UTF-8';							  // Define que receberá caractéres especiais.
		    $mail->Subject = 'Mensagem de contato via site';
		    $mail->Body    = '<strong>Informações deixadas pelo usuário</strong><br>
		    				  <hr>
		    				  <b>Nome:</b> '.$nome_contato.'<br>
		    				  <b>Telefone:</b> '.$telefone_contato.'<br>
		    				  <b>Email:</b> '.$email_contato.'<br>
		    				  <b>Mensagem:</b> '.$mensagem_contato;
		    $mail->AltBody = 'Ainda em produção';

		    $mail->send();
		    echo 'Mensagem enviada com sucesso.';
		} catch (Exception $e) {
		    echo 'Mensagem não pode ser enviada. Mailer Error: ', $mail->ErrorInfo;
		}
		
	}
	else if(isset($_POST['inputNomeOrcamento'])){

		$nome_orcamento = $_POST['inputNomeOrcamento'];
		$telefone_orcamento = $_POST['inputNumeroOrcamento'];
		if($_POST['inputEmailOrcamento'] == ''){
			$email_orcamento = "Não deixou e-mail";
		}
		else{
			$email_orcamento = $_POST['inputEmailOrcamento'];
		}
		$eCliente = $_POST['radioJaECliente'];
		$tipoServico = $_POST['radioTipoServico'];
		$descricao_orcamento = $_POST['inputDescricaoOrcamento'];

		include 'modelo_email_orcamento.php';

		$mail = new PHPMailer(true);                              // Passing `true` enables exceptions
		try {

			// To load the French version
			$mail->setLanguage('pt_br', '/path/to/PHPMailer/language/');

		    //Server settings
		    $mail->SMTPDebug = 2;                                 // Enable verbose debug output
		    $mail->isSMTP();                                      // Set mailer to use SMTP
		    $mail->Host = 'mail.rhaiters.com.br';  // Specify main and backup SMTP servers
		    $mail->SMTPAuth = true;                               // Enable SMTP authentication
		    $mail->Username = 'formulario_site@rhaiters.com.br';                 // SMTP username
		    $mail->Password = 'RHAdmin1566';                           // SMTP password
		    $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
		    $mail->Port = 465;                                 // TCP port to connect to

		    //Recipients
		    $mail->setFrom('formulario_site@rhaiters.com.br', 'Orçamento pelo Site');
		    $mail->addAddress('lab@rhaiters.com.br');               // Name is optional

		    //Content
		    $mail->isHTML(true);                                  // Set email format to HTML
		    $mail->CharSet = 'UTF-8';							  // Define que receberá caractéres especiais.
		    if($eCliente == 'sim'){
		    	$mail->Subject = 'Solicitação orçamento já cliente';
		    }
		    else{
		    	$mail->Subject = 'Solicitação orçamento cliente novo';
		    }
		    $mail->Body    = $email;
		    $mail->AltBody = 'Ainda em produção';

		    $mail->send();
		    echo 'Mensagem enviada com sucesso.';
		} catch (Exception $e) {
		    echo 'Mensagem não pode ser enviada. Mailer Error: ', $mail->ErrorInfo;
		}
	}
	else{
		echo "Nenhum formulário preenchido para envio.";
	}

?>
<?php
	header('Content-Type: application/json; charset=UTF-8');

	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require '../source/php/Exception.php';
	require '../source/php/PHPMailer.php';
	require '../source/php/SMTP.php';

	$mailPassword = file_get_contents("mailPassword");

    if(isset($_POST['orcamentoNome'])){

		$nomeOrcamento = $_POST['orcamentoNome'];
		$telefoneOrcamento = $_POST['orcamentoNumero'];
        $emailOrcamento = $_POST['orcamentoEmail'];
		$descricaoOrcamento = $_POST['orcamentoDescricao'];
        $tipoServico = $_POST['orcamentoTipoServico'];
        $jaECliente = $_POST['orcamentoJaCliente'];        

		$mail = new PHPMailer(true);                                                // Passing `true` enables exceptions
		try {

			$mail->setLanguage('pt_br', '/path/to/PHPMailer/language/');            // To load the French version

		    //Server settings
		    //$mail->SMTPDebug = 2;                                                 // Enable verbose debug output
		    $mail->isSMTP();                                                        // Set mailer to use SMTP
		    $mail->Host = 'smtp.kinghost.net';                                      // Specify main and backup SMTP servers
		    $mail->SMTPAuth = true;                                                 // Enable SMTP authentication
		    $mail->Username = 'site@rhaiters.com.br';                               // SMTP username
		    $mail->Password = $mailPassword;                                        // SMTP password
		    $mail->SMTPSecure = 'ssl';                                              // Enable TLS encryption, `ssl` also accepted
		    $mail->Port = 465;                                                      // TCP port to connect to

		    //Recipients
		    $mail->setFrom('site@rhaiters.com.br', 'Orçamento Site');
		    $mail->addAddress('atendimento@rhaiters.com.br');                          // Name is optional

		    //Content
		    $mail->isHTML(true);                                                    // Set email format to HTML
		    $mail->CharSet = 'UTF-8';							                    // Define que receberá caractéres especiais.
		    $mail->Subject = 'MENSAGEM DE ORÇAMENTO DO SITE';                         // O título do email
		    $mail->Body    = '<hr>                                                  
                              <strong>Informações deixadas pelo usuário:</strong><br>
		    				  <b>Nome -</b> '.$nomeOrcamento.'<br>
		    				  <b>Telefone -</b> '.$telefoneOrcamento.'<br>
		    				  <b>Email -</b> '.$emailOrcamento.'<br>
                              <b>Tipo de serviço -</b> '.$tipoServico.'<br>
                              <b>Já é cliente -</b> '.$jaECliente.'<br>
							  <b>Descrição -</b> '.$descricaoOrcamento;
		    $mail->AltBody = 'Ainda em produção';

		    $mail->send();
            $result = ['result' => 'success'];
            echo json_encode($result);
		} catch (Exception $e) {
            $result = ['result' => $mail->ErrorInfo];
            echo json_encode($result);
		}
		
	}
	else{
		$result = ['error' => 'parametro necessário não encontrado'];
		echo json_encode($result);
	}

?>
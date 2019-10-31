<?php 

require 'vendor/autoload.php';

$dotenv = Dotenv\Dotenv::create(__DIR__);
$dotenv->load();

if($_POST) {

	var_dump($_POST);

	$data = (object) $_POST;

	$email = new \SendGrid\Mail\Mail(); 
	$email->setFrom("contato@hygge.com.br", "Contato");
	$email->setSubject("Contato via Site");
	$email->addTo("contato@hyggesec.com.br");
	$email->addBcc("jaumcj@gmail.com");
	$email->addContent(
		"text/html", "
		<p><b>Nome:</b>$data->nome</p>
		<p><b>Email:</b>$data->email</p>
		<p><b>Telefone:</b>$data->telefone</p>
		<p><b>CNPJ:</b>$data->cpnj</p>
		<p><b>Faturamento:</b>$data->faturamento</p>
		"
	);
	
	$sendgrid = new \SendGrid(getenv('SENDGRID_API_KEY'));
	try {
		$response = $sendgrid->send($email);
		$mensagem = array(
			'mensagem' => 'Mensagem enviada com sucesso.'
		);
		echo json_encode($mensagem);
	} catch (Exception $e) {
		echo 'Caught exception: '. $e->getMessage() ."\n";
	}
}
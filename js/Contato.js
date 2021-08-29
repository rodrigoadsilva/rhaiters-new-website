let ciNome = $('#contatoNome');
let ciNumero = $('#contatoNumero');
let ciEmail = $('#contatoEmail');
let ciMensagem = $('#contatoMensagem');

$(document).ready(function(){
   
    $('#contatoForm').on('submit', function(e){
        e.preventDefault();
        $('#btnEnviarContato').prop('disabled',true);
        $('#gifEnviaContato').toggle();
        let email = ciEmail.val();
        if(ciEmail.val() == ""){
            email = "Email não informado";
        }
        $.post("/rhaiters-new-website/php/contato.php", {
                contatoNome: ciNome.val(),
                contatoNumero: ciNumero.val(),
                contatoMensagem: ciMensagem.val(),
                contatoEmail: email
            }, function(data, status){
                if(status == 'success'){
                    if(data.result == 'success'){
                        Swal.fire({
                            icon: 'success',
                            title: 'Mensagem enviada!',
                            html: 'Obrigado, em breve retornaremos seu contato.<br/> A <b>Rhaiters</b> agradeçe a preferência.',
                            showConfirmButton: false,
                            showCloseButton: false,
                            timer: 4000,
                            timerProgressBar: true
                        });
                        ciNome.val('');
                        ciNumero.val('');
                        ciMensagem.val('');
                        ciEmail.val('');
                    }
                    else{
                        // TODO Colocar uma call para avisar quando o servidor não conseguir enviar a mensagem
                        Swal.fire({
                            icon: 'error',
                            title: 'Ops...',
                            html: 'Erro ao enviar a mensagem. Aguarde mais alguns instantes que estamos resolvendo este problema.',
                            showConfirmButton: false,
                            showCloseButton: false,
                            timer: 4000,
                            timerProgressBar: true
                        });
                    }
                }
                else{
                    // TODO Colocar uma call para avisar quando o servidor não responder
                    Swal.fire({
                        icon: 'error',
                        title: 'Ops...',
                        html: 'O servidor não esta respondendo. Aguarde mais alguns instantes que estamos resolvendo este problema.',
                        showConfirmButton: false,
                        showCloseButton: false,
                        timer: 4000,
                        timerProgressBar: true
                    });
                }
                $('#btnEnviarContato').prop("disabled",false);
                $('#gifEnviaContato').toggle();
            }
        );

        

    });
});

let oiNome = $('#inputNomeOrcamento');
let oiNumero = $('#inputNumeroOrcamento');
let oiEmail = $('#inputEmailOrcamento');
let oiJaCliente = $('input[name=radioJaECliente]:checked', '#orcamentoForm').val()
let oiTipoServico = $('input[name=radioTipoServico]:checked', '#orcamentoForm').val()
let oiDescricao = $('#inputDescricaoOrcamento');


$(document).ready(function(){
   
    $('#orcamentoForm').on('submit', function(e){
        e.preventDefault();
        $('#btnEnviarOrcamento').prop('disabled',true);
        $('#gifEnviaOrcamento').toggle();
        let email = oiEmail.val();
        if(oiEmail.val() == ""){
            email = "Email não informado";
        }
        
        $.post("/rhaiters-new-website/php/orcamento.php", {
                orcamentoNome: oiNome.val(),
                orcamentoNumero: oiNumero.val(),
                orcamentoEmail: email,
                orcamentoDescricao: oiDescricao.val(),
                orcamentoTipoServico: oiTipoServico,
                orcamentoJaCliente: oiJaCliente
            }, function(data, status){
                if(status == 'success'){
                    if(data.result == 'success'){
                        $('#orcamentoModal').modal('toggle');
                        Swal.fire({
                            icon: 'success',
                            title: 'Orçamento enviado!',
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
                        $('#orcamentoModal').modal('toggle');
                        Swal.fire({
                            icon: 'error',
                            title: 'Ops...',
                            html: 'Erro ao enviar o orçamento. Aguarde mais alguns instantes que estamos resolvendo este problema.',
                            showConfirmButton: false,
                            showCloseButton: false,
                            timer: 4000,
                            timerProgressBar: true
                        });
                    }
                }
                else{
                    // TODO Colocar uma call para avisar quando o servidor não responder
                    $('#orcamentoModal').modal('toggle');
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
                $('#btnEnviarOrcamento').prop("disabled",false);
                $('#gifEnviaOrcamento').toggle();
            }
        );

        

    });
});

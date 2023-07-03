/*
Os tipos da biblioteca toastr são: success, info, warning e error.
*/
function exibirNotificacao(titulo, mensagem, tipo) {
  toastr.options = {
    closeButton: true,
    progressBar: true,
    positionClass: 'toast-top-right',
    timeOut: 5000
  };
  
  // passando o tipo como objeto
  toastr[tipo](mensagem, titulo);
}

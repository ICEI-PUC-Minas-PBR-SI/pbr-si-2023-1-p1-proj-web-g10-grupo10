const form = $("#form-cadastro-dados");
form.submit(function (e){
  const dadosFormulario = $(this).serializeArray();
  const objetoFormulario = {};
  
  $.each(dadosFormulario, function(index, field) {
      objetoFormulario[field.name] = field.value;
  });

  const dadosBasicosCadastro = JSON.parse(getItem('formulario'));
  
  const usuario = {... dadosBasicosCadastro, ... objetoFormulario};
  //cria usuario no banco de dados
  createUsuario(usuario);

  localStorage.removeItem('formulario');
  window.location.href = "login.html";
});
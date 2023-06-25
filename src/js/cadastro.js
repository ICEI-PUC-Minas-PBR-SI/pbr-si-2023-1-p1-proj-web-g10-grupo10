const form = $("#form-cadastro-dados");
const autopecasRadio = $('#Autopeças');
const clienteRadio = $('#Cliente');
form.submit(async function (e){
  const dadosFormulario = $(this).serializeArray();
  const objetoFormulario = {};
  
  $.each(dadosFormulario, function(index, field) {
      objetoFormulario[field.name] = field.value;
  });

  //const dadosBasicosCadastro = await JSON.parse(getItem('formulario'));

  const usuario = {
    nome: objetoFormulario.firstname,
    email: objetoFormulario.email,
    senha: objetoFormulario.password,
    tipoUsuario: objetoFormulario.Cliente == undefined ? 1 : 0,
    Cep: objetoFormulario.cep,
    Endereço: objetoFormulario.endereco,
    Telefone: objetoFormulario.telefone
  };

  //cria usuario no banco de dados
  await createUsuario(usuario);

  //localStorage.removeItem('formulario');
  window.location.href = "login.html";
});

autopecasRadio.on("change", function() {
  if (autopecasRadio.prop("checked")) {
    clienteRadio.prop("checked", false); // Desmarca o campo de radio "Cliente" se estiver selecionado
  }
});

clienteRadio.on("change", function() {
  if (clienteRadio.prop("checked")) {
    autopecasRadio.prop("checked", false); // Desmarca o campo de radio "Autopeças" se estiver selecionado
  }
});
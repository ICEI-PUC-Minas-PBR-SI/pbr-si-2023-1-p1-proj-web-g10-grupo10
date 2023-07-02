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

$.validator.addMethod("cpf", function(value, element) {
  value = jQuery.trim(value);

  value = value.replace(".", "");
  value = value.replace(".", "");
  cpf = value.replace("-", "");
  while (cpf.length < 11) cpf = "0" + cpf;
  var expReg = /^0+$|^1+$|^2+$|^3+$|^4+$|^5+$|^6+$|^7+$|^8+$|^9+$/;

  if (cpf.length !== 11 || expReg.test(cpf)) return false;

  var digitoDigitado = eval(cpf.charAt(9) + cpf.charAt(10));
  var soma1 = 0,
    soma2 = 0;
  var vlr = 11;

  for (i = 0; i < 9; i++) {
    soma1 += eval(cpf.charAt(i) * (vlr - 1));
    soma2 += eval(cpf.charAt(i) * vlr);
    vlr--;
  }

  soma1 = ((soma1 * 10) % 11) % 10;
  soma2 = ((soma2 + soma1 * 2) * 10) % 11;

  var digitoGerado = soma1 * 10 + soma2;

  if (digitoGerado !== digitoDigitado) return false;

  return true;
}, "CPF inválido");

$(document).ready(function() {
  $('#form-cadastro-dados').validate({
    rules: {
      cpf: {
        required: true,
        cpf: true
      },
      email: {
        required: true,
        email: true
      },
      telefone: {
        required: true,
        minlength: 10,
        maxlength: 14
      },
      endereco: 'required',
      cep: {
        required: true,
        minlength: 8,
        maxlength: 8
      },
      password: {
        required: true,
        minlength: 6
      },
      Confirmpassword: {
        required: true,
        minlength: 6,
        equalTo: '#senha'
      },
      Autopeças:' required:',
      Cliente:' required:'

    },
    messages: {
      cpf: {
        required: 'Por favor, digite seu CPF',
        minlength: 'O CPF deve ter 11 dígitos',
        maxlength: 'O CPF deve ter 11 dígitos'
      },
      email: {
        required: 'Por favor, digite seu e-mail',
        email: 'Por favor, digite um e-mail válido'
      },
      telefone: {
        required: 'Por favor, digite seu telefone',
        minlength: 'O telefone deve ter no mínimo 10 dígitos',
        maxlength: 'O telefone deve ter no máximo 14 dígitos'
      },
      endereco: 'Por favor, digite seu endereço',
      cep: {
        required: 'Por favor, digite seu CEP',
        minlength: 'O CEP deve ter 8 dígitos',
        maxlength: 'O CEP deve ter 8 dígitos'
      },
      password: {
        required: 'Por favor, digite sua senha',
        minlength: 'A senha deve ter no mínimo 6 caracteres'
      },
      Confirmpassword: {
        required: 'Por favor, confirme sua senha',
        minlength: 'A senha de confirmação deve ter no mínimo 6 caracteres',
        equalTo: 'As senhas não coincidem'
      }
    }
  });
});

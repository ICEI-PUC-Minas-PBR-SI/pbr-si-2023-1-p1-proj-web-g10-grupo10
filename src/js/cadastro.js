const form = $("#form-cadastro-dados");
const autopecasRadio = $('#Autopeças');
const clienteRadio = $('#Cliente');

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
$(document).ready(function() {
  $.validator.addMethod("cpfCnpj", function(value, element) {
    // Remove caracteres não numéricos
    value = value.replace(/[^\d]+/g, '');
  
    // CPF
    if (value.length === 11) {
      var sum = 0;
      var cpf = value.split('');
  
      // Verifica se todos os dígitos são iguais
      if (/^([0-9])\1+$/.test(value)) return false;
  
      // Calcula o primeiro dígito verificador
      for (var i = 0; i < 9; i++) {
        sum += parseInt(cpf[i]) * (10 - i);
      }
  
      var mod = (sum * 10) % 11;
      if (mod === 10 || mod === 11) mod = 0;
  
      if (mod !== parseInt(cpf[9])) return false;
  
      // Calcula o segundo dígito verificador
      sum = 0;
      for (var i = 0; i < 10; i++) {
        sum += parseInt(cpf[i]) * (11 - i);
      }
  
      mod = (sum * 10) % 11;
      if (mod === 10 || mod === 11) mod = 0;
  
      if (mod !== parseInt(cpf[10])) return false;
  
      return true;
    }
    // CNPJ
    else if (value.length === 14) {
      var cnpj = value.split('');
  
      // Verifica se todos os dígitos são iguais
      if (/^([0-9])\1+$/.test(value)) return false;
  
      // Calcula o primeiro dígito verificador
      var sum = 0;
      var weight = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
      for (var i = 0; i < 12; i++) {
        sum += parseInt(cnpj[i]) * weight[i];
      }
  
      var mod = sum % 11;
      if (mod < 2) {
        if (parseInt(cnpj[12]) !== 0) return false;
      } else {
        if (parseInt(cnpj[12]) !== 11 - mod) return false;
      }
  
      // Calcula o segundo dígito verificador
      sum = 0;
      weight = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
      for (var i = 0; i < 13; i++) {
        sum += parseInt(cnpj[i]) * weight[i];
      }
  
      mod = sum % 11;
      if (mod < 2) {
        if (parseInt(cnpj[13]) !== 0) return false;
      } else {
        if (parseInt(cnpj[13]) !== 11 - mod) return false;
      }
  
      return true;
    }
  
    return false;
  }, "Por favor, insira um CPF ou CNPJ válido.");
  
  form.validate({
    rules: {
      cpf_cnpj: {
        required: true,
        cpfCnpj: true
      },
      firstname: {
        maxlength: 100,
        minlength: 10,
        minWords: 2,
        required: true
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
      endereco: {
        required: true,
      },
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
        equalTo: '#password'
      },
    },
    messages: {
      cpf_cnpj: "Por favor, insira um CPF ou CNPJ válido.",
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
    },
  });
  
});

$("#btn-cadastrar").click(function(){
  if(form.valid()){
    form.on("submit", function (e) { 
      e.preventDefault();
      cadastraUsuario();
    });
  }
  else{
      exibirNotificacao("error", "Preencha todos os campos corretamente", 'warning');
  }
});

async function cadastraUsuario() {
  const dadosFormulario = form.serializeArray();
  const objetoFormulario = {};

  $.each(dadosFormulario, function(index, field) {
    objetoFormulario[field.name] = field.value;
  });
  console.log(objetoFormulario);
  //const dadosBasicosCadastro = await JSON.parse(getItem('formulario'));

  const usuario = {
  cpf_cnpj: objetoFormulario.cpf_cnpj,
  nome: objetoFormulario.firstname,
  email: objetoFormulario.email,
  senha: objetoFormulario.password,
  tipoUsuario: objetoFormulario.Cliente == undefined ? 1 : 0,
  Cep: objetoFormulario.cep,
  Endereço: objetoFormulario.endereco,
  Telefone: objetoFormulario.telefone
  };

  //cria usuario no banco de dados
  const isCreated =  await createUsuario(usuario);
  if(!isCreated) {
    exibirNotificacao("error", "Erro ao cadastrar usuário",'error')
    return;
  }
  else{
    exibirNotificacao("success", "Usuário cadastrado com sucesso \n Redirecionando para página de login", 'success')
    setTimeout(function() {
      // Redirecionar para outra página após 3 segundos
      window.location.href = "login.html";
    }, 3000); //
  }
  
}
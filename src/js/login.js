var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

var body = document.querySelector("body");


btnSignin.addEventListener("click", function () {
   body.className = "sign-in-js"; 
});

btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js";
})

const formLogin = $("#form-login");
formLogin.submit(async function (e) { 
    e.preventDefault();
    // Serializa os dados do formulário
    const dadosFormulario = $(this).serializeArray();
    const objetoFormulario = {};

    $.each(dadosFormulario, function(index, field) {
        objetoFormulario[field.name] = field.value;
      });
      
    const existeLogin =  await loginUsuario(objetoFormulario.email, objetoFormulario.senha)
    
    if (existeLogin.length > 0) {
        const usuario = {
            id: existeLogin[0].id,
            email: existeLogin[0].email,
            tipoUsuario: existeLogin[0].tipoUsuario,
        }
        
        console.log(usuario);
        const usuarioString = JSON.stringify(usuario)
        localStorage.setItem('usuario', usuarioString);
        window.location.href = "index.html";
    }
    else{
        alert("usuario ou senha incorretos");
    }

    //console.log(objetoFormulario);
});

const formCadastro = $("#form-cadastro");
formCadastro.submit(function (e) { 
    e.preventDefault();
    // Serializa os dados do formulário
    console.log("Formulário");
    const dadosFormulario = $(this).serializeArray();
    const objetoFormulario = {};

    $.each(dadosFormulario, function(index, field) {
        objetoFormulario[field.name] = field.value;
      });

    if(getUsuarioByEmail(objetoFormulario.email) !== undefined){
        alert("usuario ja existe");
        return false;
    }
    
    console.log(objetoFormulario);
    const formularioString = JSON.stringify(objetoFormulario)
    localStorage.setItem('formulario', formularioString);

    window.location.href = "cadastro.html";
});

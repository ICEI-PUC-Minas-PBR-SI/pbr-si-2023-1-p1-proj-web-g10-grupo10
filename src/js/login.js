
import {loginUsuario, getProdutoByEmail} from "./acessoDados/usuarios.js";

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
console.log(formLogin);
formLogin.submit(function (e) { 
    e.preventDefault();
    // Serializa os dados do formulário
    console.log("Formulário");
    const dadosFormulario = $(this).serializeArray();
    const objetoFormulario = {};

    $.each(dadosFormulario, function(index, field) {
        objetoFormulario[field.name] = field.value;
      });
      
    const isUser = loginUsuario(objetoFormulario.email, objetoFormulario.senha)

    if (isUser){
        location.href("index.html");
    }

    console.log(objetoFormulario);
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

    if(getProdutoByEmail(objetoFormulario.email) !== undefined){
        alert("usuario ja existe");
        return false;
    }
    
    console.log(objetoFormulario);
    const formularioString = JSON.stringify(objetoFormulario)
    localStorage.setItem('formulario', formularioString);

    window.location.href = "cadastro.html";
});


var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

var body = document.querySelector("body");


btnSignin.addEventListener("click", function () {
   body.className = "sign-in-js"; 
});

btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js";
})

const formLogin = $("#fom-login");
formLogin.submit(function (e) { 
    e.preventDefault();
    // Serializa os dados do formulário
    const dadosFormulario = $(this).serialize();
    
});

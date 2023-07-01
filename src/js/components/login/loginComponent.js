const containerUsuario = $("#cx-usuario");
const elNomeUser = $("#cx-usuario a #user-name");

//Adiciona o nome do usuario na pagina
const nomeUser = JSON.parse(localStorage.getItem("usuario")).nome;
elNomeUser.text(nomeUser);

containerUsuario.on("click", ".dropdown-item", function () {
    if($(this).text() == "Sair"){
      localStorage.removeItem("usuario");
      location.reload(true);
    }
});
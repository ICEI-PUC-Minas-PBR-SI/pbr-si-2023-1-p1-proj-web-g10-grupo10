const USER_NORMAL = 0;
const USER_LOJA = 1;

const paginaAtual = window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1);
const tipoUsuario  = JSON.parse(localStorage.getItem('usuario')).tipoUsuario;
const arrHeaderLinks = $("header .navbar .navbar-nav .nav-item").find(".nav-link");
const arrDropdownLinks = $("#cx-usuario .dropdown-menu").find(".dropdown-item");

// muda links das paginas

if(tipoUsuario == USER_NORMAL){
  arrHeaderLinks.each( function(){
    if($(this).attr("href") == "./telaProdutos.html"){
      $(this).hide();
    }
  })
  arrDropdownLinks.each( function(){
    if($(this).attr("href") == "./metricas.html"){
      $(this).text("Metricas de Compras");
    }
  });
  
  controleAcessoUser();
}
else if(tipoUsuario == USER_LOJA){
  arrHeaderLinks.each( function(){
    if($(this).attr("href") == "./index.html"){
      $(this).hide();
    }
  })
  const linkIcone = $("header .caixa-icone .navbar-brand");
  linkIcone.attr("href", "./telaProdutos.html");
  
  controleAcessoLoja();
}

function controleAcessoUser(){
  arrNotAcessiful = ["telaProdutos.html"];
  if(arrNotAcessiful.includes(paginaAtual))
    window.location.href = "./404.html";
}
function controleAcessoLoja(){
  arrNotAcessiful = ["index.html", "pesquisa.html"];
  if(arrNotAcessiful.includes(paginaAtual))
    window.location.href = "./404.html";
}
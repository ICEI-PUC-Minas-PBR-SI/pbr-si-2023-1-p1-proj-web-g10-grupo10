function escondeTabelasProdutos(tabId,TabelaMostra,TabelaEsconder, tabDesativar){
    
    var showTable = document.getElementById(TabelaMostra);
    var hideTable = document.getElementById(TabelaEsconder);

    var activeDivs = document.getElementsByClassName("active");
    for (var i = 0; i < activeDivs.length; i++) {
        if(activeDivs[i].id == tabDesativar){
            activeDivs[i].classList.remove("active");
        }
    }
    const usuario = {
        email:"usuarioemail@gmail.com",
        tipoUsuario:0,
        id:1
      }
      const usuariostrig = JSON.stringify(usuario)
      localStorage.setItem('usuariologado', usuariostrig);
      
    tabId.classList.add("active");

    showTable.style.display = "block";
    hideTable.style.display = "none";
}
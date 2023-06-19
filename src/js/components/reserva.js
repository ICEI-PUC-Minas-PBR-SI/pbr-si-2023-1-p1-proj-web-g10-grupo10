
const QTD_MAX_RESERVAS = 4;
const QTD_MIN_RESERVAS = 1;

const btnQtdReservas = $('.btn-qtd');
btnQtdReservas.click(manipulaQuantidadeItensReservas);

const btnReservar = $('.btn-reservar');
btnReservar.click(function(){
  const idProduto = $(this).prop("id");
  const qtd = idProduto.closets(".qtd-reservas").text();
  const id = idProduto.replace("prod_", "");
  fazReserva(id, qtd);
});

function manipulaQuantidadeItensReservas(){
  if($(this).prop("id") == "btn-mais"){
    let qtd = parseInt($('#qtd-reservas').text()) + 1;
    if(qtd <= QTD_MAX_RESERVAS) $('#qtd-reservas').text(qtd);
  }
  else{
    let qtd = parseInt($('#qtd-reservas').text()) - 1;
    // Não deixa a quantidade ser menor que 1
    if(qtd >= QTD_MIN_RESERVAS) $('#qtd-reservas').text(qtd);
  }
}

function fazReserva(id ,qtd){

}
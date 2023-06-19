import { getProdutoById } from "../acessoDados/produtos";

const QTD_MAX_RESERVAS = 4;
const QTD_MIN_RESERVAS = 1;
const QTD_MAX_DIAS_RESERVADO = 7;

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

function fazReserva(id, qtd){
  // pega usuario logado 
  //const user = JSON.parse(localStorage.getItem("user"));
  const produto = getProdutoById(id);
  const today = new Date();
  console.log(today.toLocaleDateString());
  const dataLimite = today.setDate(today.getDate() + QTD_MAX_DIAS_RESERVADO);
  
  const reserva = {
    id: 1,
    usuarioId: user.id,
    lojaId: produto.usuarioId,
    produtoId: produto.id,
    tipoUsuario: user.tipoUsuario,
    dataReserva: today.toLocaleDateString(),
    dataLimite: dataLimite.toLocaleDateString(),
    statusPedido: 0,
    quantidade: qtd,
    valor: produto.valor * qtd,
    ativo: 1
  };
  
}
const QTD_MAX_RESERVAS = 4;
const QTD_MIN_RESERVAS = 1;
const QTD_MAX_DIAS_RESERVADO = 7;
const RESERVADO = 0;


//Eventos de clique
$("#caixa-produtos, #produtos-busca").on("click", '.btn-qtd', manipulaQuantidadeItensReservas);

$("#caixa-produtos, #produtos-busca").on("click", '.btn-reservar', function(e) {  
  e.preventDefault();
  const jIdProdutoAtual = $(this).prop("id");
  const qtd = parseInt($(this).prev().find('.qtd-reservas').text());
  const id = jIdProdutoAtual.replace("prod_", "");

  fazReserva(id, qtd, $(this));
});

function manipulaQuantidadeItensReservas(){
  const IdBtnAtual = $(this).prop("id");
  if(IdBtnAtual == "btn-mais"){
    const jQtdReservas = $(this).prev();
    let qtd = parseInt(jQtdReservas.text()) + 1;
    if(qtd <= QTD_MAX_RESERVAS) jQtdReservas.text(qtd);
  }
  else{
    const jQtdReservas = $(this).next();
    let qtd = parseInt(jQtdReservas.text()) - 1;
    // Não deixa a quantidade ser menor que 1
    if(qtd >= QTD_MIN_RESERVAS) jQtdReservas.text(qtd);
  }
}

async function fazReserva(id, qtd, el){
  // pega usuario logado 
  const user = JSON.parse(localStorage.getItem("usuario"));
  const arrReservas = await getAllReservas();
  const idReserva = retornaIDAutoIncrementEntidades(arrReservas);
  let produto = await getProdutoById(id);
  
  if(produto.quantidadeDisponivel < qtd){
    exibirNotificacao('Erro', 'Quantidade de produtos indisponivel!', 'error');
    return;
  }
  const today = new Date();
  // soma sete dias na data inicial, encontrando data limite para retirar o  produto
  let dataLimite = new Date();
  dataLimite = new Date(dataLimite.setDate(dataLimite.getDate() + QTD_MAX_DIAS_RESERVADO));
  
  const reserva = {
    id: idReserva,
    usuarioId: user.id,
    lojaId: produto.usuarioId,
    produtoId: produto.id,
    tipoUsuario: user.tipoUsuario,
    dataReserva: today.toLocaleDateString(),
    dataLimite: dataLimite.toLocaleDateString(),
    statusPedido: RESERVADO,
    quantidade: qtd,
    valor: produto.valor * qtd,
    ativo: 1
  };
  
  isReservadoAnteriormente = verificaSeUsuarioJaReservouProduto(user.id, produto.id, arrReservas);
  if(isReservadoAnteriormente){
    const created = await createReserva(reserva);
    // Se a reserva foi criada com sucesso
    if(created){
      el.closest(".modal").modal("hide");
    // Atualiza a quantidade disponivel do produto
      exibirNotificacao('Sucesso', 'Reserva feita com sucesso!', 'success');

      produto.quantidadeDisponivel = parseFloat(produto.quantidadeDisponivel) - qtd;
      const isUpdateProduto = await updateProduto(produto, produto.id);
      
      if(isUpdateProduto){
        exibirNotificacao('Sucesso', 'Quantidade de Produtos Atualizado com sucesso', 'success');
      }
    }
    else{
      exibirNotificacao('Erro', 'Erro ao fazer reserva', 'error');
    }  
  }
  else{
    exibirNotificacao('Rervado Anteriormente', 'Voce nao pode reservar um produto que está pendente para ser retirado', 'warning');
  }
  
}


function verificaSeUsuarioJaReservouProduto(idUsuario, idProduto, arrReservas){
  const reservas = arrReservas.filter(reserva => reserva.usuarioId == idUsuario && reserva.produtoId == idProduto && reserva.statusPedido == RESERVADO);
  return reservas.length > 0;
}

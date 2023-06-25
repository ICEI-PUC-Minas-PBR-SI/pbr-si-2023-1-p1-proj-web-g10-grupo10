export function initReserva() {
  const QTD_MAX_RESERVAS = 4;
  const QTD_MIN_RESERVAS = 1;
  const QTD_MAX_DIAS_RESERVADO = 7;
  const RESERVADO = 0;
    // Seu código de manipulação do DOM aqui
  const btnQtdReservas = $('.btn-qtd');
  btnQtdReservas.click(manipulaQuantidadeItensReservas);
  
  const btnReservar = $('.btn-reservar');
  btnReservar.click(function() {   
    const jIdProdutoAtual = $(this).prop("id");
    const qtd = $(this).closest(".qtd-reservas").text();
    const id = jIdProdutoAtual.replace("prod_", "");

    fazReserva(id, qtd);
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

  function fazReserva(id, qtd){
    // pega usuario logado 
    const user = JSON.parse(localStorage.getItem("usuario"));
    const idReserva = retornaIDAutoIncrementEntidades(getAllReservas());
    let produto = getProdutoById(id);
    const today = new Date();
    // soma sete dias na data inicial, encontrando data limite para retirar o  produto
    const dataLimite = today.setDate(today.getDate() + QTD_MAX_DIAS_RESERVADO);
    
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
    
    const created = createReserva(JSON.stringify(reserva));
    // Se a reserva foi criada com sucesso
    if(created){
    // Atualiza a quantidade disponivel do produto
      produto.quantidadeDisponivel -= qtd;
      updateProduto(JSON.stringify(produto), produto.id);
    }
    
  }
}
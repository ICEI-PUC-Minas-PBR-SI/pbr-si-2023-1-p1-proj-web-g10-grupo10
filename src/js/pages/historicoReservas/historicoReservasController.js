const TIPO_USER = {
    cliente: 0,
    loja: 1,
    admin: 2
}
const STATUS_RESERVA = {
    reservado: '0',
    concluido: '1',
    cancelado: '2'
} 
const ID_RESERVA_STATUS = {
    0: 'Reservado',
    1: 'Concluido',
    2: 'Cancelado'
}

const ID_ClASS_RESERVA_STATUS = {
    0: 'pending',
    1: 'sucess',
    2: 'canceled'
}

const usuario = JSON.parse(localStorage.getItem('usuario'));
var tipoUsuario = usuario.tipoUsuario;
const containerTabela = $('.container-tabela');

// armazena na variavel arrReservas todas reservas do usuario ou da loja
const arrReservas = await getProdutosReservadosByUser(usuario.id);
console.log(arrReservas);
// monta tabela no html com as reservas do usuario ou da loja
montaTabelaReservas(arrReservas);

//obtem todas reservas do usuario ou da loja
async function getProdutosReservadosByUser(idUserOrLoja){
    const funcLojaOrUser = (tipoUsuario == TIPO_USER.loja) ? getReservasByLojaId : getReservasByUserId;
    const arrReservas = await funcLojaOrUser(idUserOrLoja);
    return arrReservas;
}

async function montaTabelaReservas(arrReservas) {
    const cabecalhoTabela = $('#tb-head-reservas');
    const corpoTabela = $('#tb-body-reservas');
    let tbodyHtml = '';

    for (const reserva of arrReservas) {
        tbodyHtml += await getLinhaTabelaReservas(reserva);
    }

    cabecalhoTabela.html(getCabecalhoTabelaReservas());
    corpoTabela.html(tbodyHtml);
    $("#tb-reservas").DataTable();
}

function getCabecalhoTabelaReservas(){
    const thNomeCliente = (tipoUsuario == TIPO_USER.loja) ? `<th>Nome do Cliente</th>` : '';
    const cabecalho = `
        <tr>
            <th>Data de Reserva</th>
            ${thNomeCliente}
            <th>Descricão da Peça</th>
            <th>Status</th>
            <th>Quantidade Reservadas</th>
            <th>Valor Total</th>
            <th>Data Retirada</th>
            <th>Acões</th>
        </tr>
    `;
    return cabecalho;
}
async function getLinhaTabelaReservas(reserva){
    const usuarioDaReserva = await getUsuarioById(reserva.usuarioId);
    const produtoReserva   = await getProdutoById(reserva.produtoId);

    const tdNomeCliente = (tipoUsuario == TIPO_USER.loja) ? `<td>${usuarioDaReserva.nome}</td>` : '';
    // implementar funcao de desativar botao de concluir reserva e cancelar reserva quando o status for diferente de reservado
    const desativado = (reserva.statusPedido != STATUS_RESERVA.reservado) ? 'disabled' : '';
    const linha = `
            <tr class="table-line" id="reserva-${reserva.id}">
                <td>${reserva.dataReserva}</td>
                ${tdNomeCliente}
                <td>${produtoReserva.nomeDaPeca}</td>
                <td><span class="status ${ID_ClASS_RESERVA_STATUS[reserva.statusPedido]}">${ID_RESERVA_STATUS[reserva.statusPedido]}</span></td>
                <td>${reserva.quantidade}</td>
                <td>R$ ${reserva.valor}</td>
                <td>${reserva.dataLimite}</td>
                <td class="item-acoes">
                <button class="btn btn-light" data-bs-toggle="modal"
                    data-bs-target="#modalConcluirReserva" ${desativado} onclick="abriuModalConcluiReserva(${reserva.id})"><i class="fas fa-check"
                    style="color: #45af28;"></i></button>
                   
                <button class="btn btn-light" data-bs-toggle="modal"
                    data-bs-target="#modalCancelarReserva" ${desativado} onclick="abriuModalCancelaReserva(${reserva.id})"><i class="fas fa-trash"
                        style="color: #d92d20;"></i></button>
                    <button class="btn btn-light"><i class="fas fa-briefcase"></i></button>
                </td>
            </tr>    
        `;
  
    return linha;
}

// TODO: verificar com o pedro sobre se quando concluido a data limite vira data da retirada
// So a loja pode concluir
var formConcluirReserva = $('#form-concluir-reserva');
formConcluirReserva.on("submit",function(e) {
    concluiReserva(e);
});
function concluiReserva (e) {
    e.preventDefault();
    const idReserva = $(this).attr('data-id-reserva');
    let novosDados = {
        statusPedido: STATUS_RESERVA.concluido
    }
    
    const isUpdated =  updateReserva(JSON.stringify(novosDados), idReserva);
    
    if(isUpdated){
        fechaModalConcluiReserva();
        $(this).closest("#modalConcluirReserva").modal("hide");
        
        const reservaAtualizada = getReservaById(idReserva);
        let linha = $('#reserva-' + idReserva);
        
        // Atualiza linha da tabela
        linha.replaceWith(getLinhaTabelaReservas(reservaAtualizada, tipoUsuario));   
        exibirNotificacao('Sucesso', 'Reserva concluída com sucesso!', 'success');
    }
    else{
        exibirNotificacao('Erro', 'Erro ao concluir reserva!', 'error');
    }
  }
//Quando modal abrir, seta o id da reserva no form
function abriuModalConcluiReserva(idReserva){
    formConcluirReserva.attr('data-id-reserva', idReserva);
}
// Quando modal fechar remove o id da reserva do form
function fechouModalConcluiReserva(){
    formConcluirReserva.removeAttr('data-id-reserva');
}


let formCancelaReserva = $('#form-cancelar-reserva');
formCancelaReserva.on("submit",function(e) {
    cancelaReserva(e);
});
function cancelaReserva(e){
    e.preventDefault();
    
    const idReserva = $(this).attr('data-id-reserva');
    let novosDados = {
        statusPedido: STATUS_RESERVA.cancelado
    }
    
    const update =  updateReserva(JSON.stringify(novosDados), idReserva);
    
    if(update){
        fechaModalCancelaReserva();
        $(this).closest("#modalCancelarReserva").modal("hide");
        
        const reservaAtualizada = getReservaById(idReserva);
        let linha = $('#reserva-' + idReserva);
        // Atualiza linha da tabela
        linha.replaceWith(getLinhaTabelaReservas(reservaAtualizada, tipoUsuario));   
        exibirNotificacao('Sucesso', 'Reserva cancelada com sucesso!', 'success');
        
        // Atualiza quantidade disponivel do produto apos cancelar reserva
        const produtoReserva = getProdutoById(reservaAtualizada.produtoId);
        const novosDadosProdutos = {
            quantidadeDisponivel: reservaAtualizada.quantidade + produtoReserva.quantidadeDisponivel
        }
        
        updateProduto(JSON.stringify(novosDadosProdutos), produtoReserva.id);
    }
    else{
        fechaModalCancelaReserva();
        $(this).closest("#modalCancelarReserva").modal("hide");
        exibirNotificacao('Erro', 'Erro ao cancelar reserva!', 'error');
    }
}
function abriuModalCancelaReserva(){
    formReserva.attr('data-id-reserva', idReserva);
}
function fechaModalCancelaReserva(){
    formReserva.removeAttr('data-id-reserva');
}

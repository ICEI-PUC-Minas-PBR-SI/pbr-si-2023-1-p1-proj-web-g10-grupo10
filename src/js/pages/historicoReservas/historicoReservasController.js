const TIPO_USER = {
    cliente: 0,
    loja: 1,
    admin: 2
}
const STATUS_RESERVA = {
    reservado: 0,
    concluido: 1,
    cancelado: 2
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

showLoadingIcon(containerTabela);
// armazena na variavel arrReservas todas reservas do usuario ou da loja
const arrReservas = await getProdutosReservadosByUser(usuario.id);
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
    
    hideLoadingIcon();
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
    const [usuarioDaReserva, produtoReserva] = await Promise.all([
        getUsuarioById(reserva.usuarioId),
        getProdutoById(reserva.produtoId)
      ]);

    const tdNomeCliente = (tipoUsuario == TIPO_USER.loja) ? `<td>${usuarioDaReserva.nome}</td>` : '';
    // implementar funcao de desativar botao de concluir reserva e cancelar reserva quando o status for diferente de reservado
    const desativadoConfirmar = ((reserva.statusPedido != STATUS_RESERVA.reservado) || tipoUsuario == TIPO_USER.cliente) ? 'disabled' : '';
    const desativadoCancelar = (reserva.statusPedido != STATUS_RESERVA.reservado) ? 'disabled' : '';
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
                <button class="btn btn-light btn-concluir" data-bs-toggle="modal"
                    data-bs-target="#modalConcluirReserva" ${desativadoConfirmar} ><i class="fas fa-check"
                    style="color: #45af28;"></i></button>
                   
                <button class="btn btn-light btn-cancel" data-bs-toggle="modal"
                    data-bs-target="#modalCancelarReserva" ${desativadoCancelar}><i class="fas fa-trash"
                        style="color: #d92d20;"></i></button>
                    <button class="btn btn-light"><i class="fas fa-briefcase"></i></button>
                </td>
            </tr>    
        `;
  
    return linha;
}

// TODO: verificar com o pedro sobre se quando concluido a data limite vira data da retirada
// So a loja pode concluir

const formConcluirReserva = $('#form-concluir-reserva');
$(document).on("submit", "#form-concluir-reserva", function(e){
    e.preventDefault();
    concluiReserva();
})


async function concluiReserva () {
    const idReserva = formConcluirReserva.attr('data-id-reserva');
    const today = new Date();
    let novosDados = {
        statusPedido: STATUS_RESERVA.concluido,
        dataLimite: today.toLocaleDateString()
    }
    
    const isUpdated = await updateReserva(novosDados, idReserva);

    if(isUpdated){
        fechouModalConcluiReserva();
        formConcluirReserva.closest("#modalConcluirReserva").modal("hide");
        const reservaAtualizada = await getReservaById(idReserva);
        let linha = $('#reserva-' + idReserva);
        
        // Atualiza linha da tabela
        const novaLinha = getLinhaTabelaReservas(reservaAtualizada)
        linha.replaceWith(novaLinha);   
        exibirNotificacao('Sucesso', 'Reserva concluída com sucesso!', 'success');
    }
    else{
        exibirNotificacao('Erro', 'Erro ao concluir reserva!', 'error');
    }
}

const tabelaReservas = $('#tb-reservas');
tabelaReservas.on("click",".btn-concluir", abriuModalConcluiReserva);
//Quando modal abrir, seta o id da reserva no form
function abriuModalConcluiReserva(){
    const idReserva = $(this).closest('.table-line').prop('id').replace('reserva-', '')
    formConcluirReserva.attr('data-id-reserva', idReserva);
}

const modalConcluirReserva = $("#modalConcluirReserva");
modalConcluirReserva.on("click", ".btn-fechar", fechouModalConcluiReserva);
// Quando modal fechar remove o id da reserva do form
function fechouModalConcluiReserva(){
    console.log("fechou")
    formConcluirReserva.removeAttr('data-id-reserva');
}


let formCancelaReserva = $('#form-cancelar-reserva');
formCancelaReserva.on("submit",function(e) {
    e.preventDefault();
    cancelaReserva();
});
async function cancelaReserva(){

    const idReserva = formCancelaReserva.attr('data-id-reserva');
    let novosDados = {
        statusPedido: STATUS_RESERVA.cancelado
    }
    
    const update =  await updateReserva(novosDados, idReserva);
    
    if(update){
        fechaModalCancelaReserva();
        formCancelaReserva.closest("#modalCancelarReserva").modal("hide");
        
        const reservaAtualizada = await getReservaById(idReserva);
        let linha = $('#reserva-' + idReserva);
        // Atualiza linha da tabela
        linha.replaceWith(getLinhaTabelaReservas(reservaAtualizada, tipoUsuario));   
        exibirNotificacao('Sucesso', 'Reserva cancelada com sucesso!', 'success');
        
        // Atualiza quantidade disponivel do produto apos cancelar reserva
        const produtoReserva = await getProdutoById(reservaAtualizada.produtoId);
        const novosDadosProdutos = {
            quantidadeDisponivel: reservaAtualizada.quantidade + produtoReserva.quantidadeDisponivel
        }
        
        const isUpdatedProduto = await  updateProduto(novosDadosProdutos, produtoReserva.id);
        if(isUpdatedProduto)
            exibirNotificacao('Sucesso', 'Atualizado quantidade de produtos!', 'success');
    }
    else{
        fechaModalCancelaReserva();
        formCancelaReserva.closest("#modalCancelarReserva").modal("hide");
        exibirNotificacao('Erro', 'Erro ao cancelar reserva!', 'error');
    }
}

tabelaReservas.on("click",".btn-cancel", abriuModalCancelaReserva);
const modalCancelarReserva = $("#modalCancelarReserva");
modalCancelarReserva.on("click", ".btn-fechar", fechaModalCancelaReserva);

function abriuModalCancelaReserva(){
    const idReserva = $(this).closest('.table-line').prop('id').replace('reserva-', '')
    formCancelaReserva.attr('data-id-reserva', idReserva);
}
function fechaModalCancelaReserva(){
    formCancelaReserva.removeAttr('data-id-reserva');
}

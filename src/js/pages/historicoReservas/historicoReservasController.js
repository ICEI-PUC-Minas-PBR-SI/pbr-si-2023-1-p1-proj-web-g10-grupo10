//obtem usuário do local storage e tipo de usuário, para mostrar historico dele
//     const usuario = JSON.parse(localStorage.getItem('usuario'))
//     const tipoUsuario = usuario.tipoUsuario
import { updateProduto } from "../../acessoDados/produtos.js";
import { getReservaById, getReservasByLojaId, getReservasByUserId, updateReserva } from "../../acessoDados/reservas.js";
import { exibirNotificacao } from "../../utils/notifications_geral.js";

const TIPO_USER = {
    cliente: 0,
    loja: 1,
    admin: 2
}
const STATUS_RESERVA = {
    reservado: '1',
    concluido: '2',
    cancelado: '3'
} 
const ID_RESERVA_STATUS = {
    1: 'Reservado',
    2: 'Concluido',
    3: 'Cancelado'
}

const ID_ClASS_RESERVA_STATUS = {
    1: 'pending',
    2: 'sucess',
    3: 'canceled'
}

const usuario = JSON.parse(localStorage.getItem('usuario'));
var tipoUsuario = usuario.tipoUsuario;
const containerTabela = $('.container-tabela');

// armazena na variavel arrReservas todas reservas do usuario ou da loja
arrReservas = getProdutosReservadosByUser(usuario.id);
// monta tabela no html com as reservas do usuario ou da loja
montaTabelaReservas(arrReservas);

//obtem todas reservas do usuario ou da loja
function getProdutosReservadosByUser(idUserOrLoja){
    const funcLojaOrUser = (tipoUsuario == 2) ? getReservasByLojaId : getReservasByUserId;
    const arrReservas = funcLojaOrUser(idUserOrLoja);
    return arrReservas;
}

function montaTabelaReservas(arrReservas){
    const cabecalhoTabela = $('#tb-head-reservas');
    const corpoTabela = $('#tb-body-reservas');
    let tbodyHtml = '';

    arrReservas.forEach(reserva => {
        tbodyHtml += getLinhaTabelaReservas(reserva);
    });
    
    cabecalhoTabela.html(getCabecalhoTabelaReservas());
    corpoTabela.html(tbodyHtml);
}
function getCabecalhoTabelaReservas(){
    const thNomeCliente = (tipoUsuario == TIPO_USER.loja) ? `<th>Nome do Cliente</th>` : '';
    const cabecalho = `
        <tr>
            <th>Data de Reserva</th>
            ${tdNomeCliente}
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
function getLinhaTabelaReservas(reserva){
    const usuarioDaReserva = getUsuarioById(reserva.usuarioId);
    const produtoReserva   = getProdutoById(reserva.produtoId);

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

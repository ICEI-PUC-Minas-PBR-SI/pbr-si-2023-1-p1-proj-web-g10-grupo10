//obtem usuário do local storage e tipo de usuário, para mostrar historico dele
//     const usuario = JSON.parse(localStorage.getItem('usuario'))
//     const tipoUsuario = usuario.tipoUsuario

import { updateProduto } from "../../acessoDados/produtos";
import { getReservaById, getReservasByLojaId, getReservasByUserId, updateReserva } from "../../acessoDados/reservas";
import { exibirNotificacao } from "../../utils/notifications_geral";

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

const usuario = JSON.parse(localStorage.getItem('usuario'));
var tipoUsuario = usuario.tipoUsuario;

const containerTabela = $('.container-tabela');

arrReservas = getProdutosReservadosByUser(usuario.id);
montaTabelaReservas(arrReservas, tipoUsuario);


function getProdutosReservadosByUser(idUserOrLoja){
    const funcLojaOrUser = (tipoUsuario == 2) ? getReservasByLojaId : getReservasByUserId;
    const arrReservas = funcLojaOrUser(idUserOrLoja);
    return arrReservas;
}

function montaTabelaReservas(arrReservas, tipoUsuario){
    const corpoTabela = $('#table-body-reservas');
    let tbHtml = '';

    arrReservas.forEach(reserva => {
        tbHtml += getLinhaTabelaReservas(reserva, tipoUsuario);
    });

    corpoTabela.html(tbHtml);
}

function getLinhaTabelaReservas(reserva, tipoUsuario){
    const usuarioDaReserva = getUsuarioById(reserva.usuarioId);
    const produtoReserva   = getProdutoById(reserva.produtoId);

    const tdNomeUser = (tipoUsuario == TIPO_USER.loja) ? `<td>${usuarioDaReserva.nome}</td>` : '';
    const linha = `
            <tr class="table-line" id="reserva-${reserva.id}">
                <td>${reserva.dataReserva}</td>
                ${tdNomeUser}
                <td>${produtoReserva.nomeDaPeca}</td>
                <td><span class="status pending">${reserva.statusPedido}</span></td>
                <td>${reserva.quantidade}</td>
                <td>R$ ${reserva.valor}</td>
                <td>${reserva.dataLimite}</td>
                <td class="item-acoes">
                <button class="btn btn-light" data-bs-toggle="modal"
                    data-bs-target="#modalConcluirReserva" onclick="abriuModalConcluiReserva(${reserva.id})"><i class="fas fa-check"
                    style="color: #45af28;"></i></button>
                   
                <button class="btn btn-light" data-bs-toggle="modal"
                    data-bs-target="#modalCancelarReserva" onclick="abriuModalCancelaReserva(${reserva.id})"><i class="fas fa-trash"
                        style="color: #d92d20;"></i></button>
                    <button class="btn btn-light"><i class="fas fa-briefcase"></i></button>
                </td>
            </tr>    
        `;
  
    return linha;
}

// So a loja pode concluir e cancelar reserva
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
    const update =  updateReserva(JSON.stringify(novosDados), idReserva);
    if(update){
        fechaModalConcluiReserva();
        const reservaAtualizada = getReservaById(idReserva);
        let linha = $('#reserva-' + idReserva);
        // Atualiza linha da tabela
        linha.replaceWith(getLinhaTabelaReservas(reservaAtualizada, tipoUsuario));   
        exibirNotificacao('Sucesso', 'Reserva concluída com sucesso!', 'success');
    }
    else{
        alert('Erro ao concluir reserva!');
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
        const reservaAtualizada = getReservaById(idReserva);
        let linha = $('#reserva-' + idReserva);
        // Atualiza linha da tabela
        linha.replaceWith(getLinhaTabelaReservas(reservaAtualizada, tipoUsuario));   
        exibirNotificacao('Sucesso', 'Reserva cancelada com sucesso!', 'success');
        
        const produtoReserva = getProdutoById(reservaAtualizada.produtoId);
        const novosDadosProdutos = {
            quantidadeDisponivel: reservaAtualizada.quantidade + produtoReserva.quantidadeDisponivel
        }
        updateProduto(JSON.stringify(novosDadosProdutos), produtoReserva.id);
    }
    else{
        alert('Erro ao cancelar reserva!');
        exibirNotificacao('Erro', 'Erro ao cancelar reserva!', 'error');
    }
}
function abriuModalCancelaReserva(){
    formReserva.attr('data-id-reserva', idReserva);
}
function fechaModalCancelaReserva(){
    formReserva.removeAttr('data-id-reserva');
}

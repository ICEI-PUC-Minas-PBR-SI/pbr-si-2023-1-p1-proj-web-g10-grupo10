//obtem usuário do local storage e tipo de usuário, para mostrar historico dele
//     const usuario = JSON.parse(localStorage.getItem('usuario'))
//     const tipoUsuario = usuario.tipoUsuario

import { getReservasByLojaId, getReservasByUserId } from "../../acessoDados/reservas";

// Reservas do Usuário

const USER_CLIENTE = 1
const USER_LOJA = 2
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
        tbHtml += montaLinhaTabelaReservas(reserva, null, tipoUsuario);
    });

    corpoTabela.html(tbHtml);
}


function EditaReserva(idReserva, elLinhaTabela){
    const reserva = getReservaById(idReserva);
    const linha = getLinhaTabelaReservas(reserva, tipoUsuario);
    elLinhaTabela.replaceWith(linha);
}

function getLinhaTabelaReservas(reserva, tipoUsuario){
    const usuarioDaReserva = getUsuarioById(reserva.usuarioId);
    const produtoReserva   = getProdutoById(reserva.produtoId);

    const tdNomeUser = (tipoUsuario == USER_LOJA) ? `<td>${usuarioDaReserva.nome}</td>` : '';
    const linha = `
            <tr class="table-line">
                <td>${reserva.dataReserva}</td>
                ${tdNomeUser}
                <td>${produtoReserva.nomeDaPeca}</td>
                <td><span class="status pending">${reserva.statusPedido}</span></td>
                <td>${reserva.quantidade}</td>
                <td>R$ ${reserva.valor}</td>
                <td>${reserva.dataLimite}</td>
            </tr>    
        `;
  
    return linha;
}


function deletaReserva(reserva, idUser){
}
function deletaLinhaReserva(elLinhaTabela){

}

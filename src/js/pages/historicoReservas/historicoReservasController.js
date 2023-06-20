//obtem usuário do local storage e tipo de usuário, para mostrar historico dele
//     const usuario = JSON.parse(localStorage.getItem('usuario'))
//     const tipoUsuario = usuario.tipoUsuario

import { getReservasByLojaId, getReservasByUserId } from "../../acessoDados/reservas";

// Reservas do Usuário

const containerTabela = $('.container-tabela');

function mostraProdutosReservadosByUser(idUser){
    const funcLojaOrUser = (tipoUsuario == 2) ? getReservasByLojaId : getReservasByUserId;
    const arrReservas = funcLojaOrUser(idUser);
}
function montaTabelaReservas(reserva){
}


function EditaReserva(reserva, idUser){
}
function montaLinhaTabelaReservas(reserva, elLinhaTabela){
}


function deletaReserva(reserva, idUser){
}
function deletaLinhaReserva(elLinhaTabela){

}

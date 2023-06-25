const URL_RESERVAS = 'http://localhost:3000/reservas'
const URL_REERVA_Usuarios = 'http://localhost:3000/usuarios'

// Metodo que retorna todos os reservas do banco
async function getAllReservas() {
    try {
        const response = await fetch(URL_RESERVAS);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao acessar banco:', error);
    }
}

// Metodo que retorna a reserva que possui o Id especificado
async function getReservaById(id) {
    try {
        const response = await fetch(URL_RESERVAS + '/' + id);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao acessar banco:', error);
    }
}

// Metodo que deleta a reserva indicado pelo id
async function deleteReserva(id) {
    try {
        const response = await fetch(URL_RESERVAS + '/' + id, {
            method: 'DELETE',
        });
        // const data = await response.json();
        // return data;
        location.reload()
    } catch (error) {
        console.error('Erro ao acessar banco:', error);
    }
}

// Metodo que adiciona a reserva ao banco
async function createReserva(jsonReserva) {
    try {
        const response = await fetch(URL_RESERVAS, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: jsonReserva
        });
        // const data = await response.json();
        // return data;
        return true;
    } catch (error) {
        console.error('Erro ao acessar banco:', error);
    }
}

// Metodo que atualiza uma reserva já existente
async function updateReserva(reserva,id) {
    try {
        const response = await fetch(URL_RESERVAS + '/' + id, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: reserva
        });
        // const data = await response.json();
        return true;
        location.reload()
    } catch (error) {
        console.error('Erro ao acessar banco:', error);
        return false;
    }
}

//Metodo que busca todos os reservas que pertecem ao usuário
async function getReservasByUserId(userId) {
    try {
        const response = await fetch(URL_RESERVAS);
        const data = await response.json();
        const filteredData = data.filter(objeto => objeto.usuarioId === userId);
        return filteredData;
    } catch (error) {
        console.error('Erro ao acessar banco:', error);
    }
}

//Metodo que busca todos os reservas que foram feitas na loja
async function getReservasByLojaId(lojaId) {
    try {
        const response = await fetch(URL_RESERVAS);
        const data = await response.json();
        const filteredData = data.filter(objeto => objeto.lojaId === lojaId);
        return filteredData;
    } catch (error) {
        console.error('Erro ao acessar banco:', error);
    }
}

// Busca todas as reservas feitas na loja que foram concluidas
async function getReservasByLojaIdStatus(lojaId, status) {
    try {
        const response = await fetch(`${URL}?lojaId=${lojaId}&statusPedido=${status}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao acessar banco:', error);
    }
}

const URL = 'http://localhost:3000/reservas'
const URLusuarios = 'http://localhost:3000/usuarios'

// Metodo que retorna todos os reservas do banco
function getAllReservas() {
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error('Erro ao acessar banco:', error);
        });
}

// Metodo que retorna a reserva que possui o Id especificado
function getReservaById(id) {
    fetch(URL + '/' + id)
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error('Erro ao acessar banco:', error);
        });
}

// Metodo que deleta a reserva indicado pelo id
function deleteReserva(id){
    fetch(URL + '/' + id, {
        method: 'DELETE',
    })
    .then(response => response.json())
    .then(() => {
        location.reload()
    }).catch(error => {
        console.error('Erro ao acessar banco:', error);
    });
}

// Metodo que adiciona a reserva ao banco
function createReserva(usuario){
    fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: usuario
    })
    .then(response => response.json())
    .then(() => location.reload())
    .catch(error => {
        console.error('Erro ao acessar banco:', error);
    });
}

// Metodo que atualiza uma reserva já existente
function updateReserva(usuario){
    fetch(URL, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: usuario
    })
    .then(response => response.json())
    .then(() => location.reload())
    .catch(error => {
        console.error('Erro ao acessar banco:', error);
    });
}

//Metodo que busca todos os reservas que pertecem ao usuário
function getReservasByUserId(userId){
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            return data.filter(objeto => objeto.usuarioId === userId);
        })
        .catch(error => {
            console.error('Erro ao acessar banco:', error);
        });
}

//Metodo que busca todos os reservas que foram feitas na loja
function getReservasByLojaId(lojaId){
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            return data.filter(objeto => objeto.lojaId === lojaId);
        })
        .catch(error => {
            console.error('Erro ao acessar banco:', error);
        });
}
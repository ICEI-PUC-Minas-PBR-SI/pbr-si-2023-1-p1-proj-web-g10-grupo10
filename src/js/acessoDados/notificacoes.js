const URL = 'http://localhost:3000/notificacoes'
const URLusuarios = 'http://localhost:3000/usuarios'

// Metodo que retorna todos os notificacoes do banco
function getAllNotificacoes() {
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            // Aqui estão os dados do arquivo JSON
            console.log(data);
            return data;
        })
        .catch(error => {
            console.error('Erro ao acessar banco:', error);
        });
}

// Metodo que retorna o notificacao que possui o Id especificado
function getNotificacaoById(id) {
    fetch(URL + '/' + id)
        .then(response => response.json())
        .then(data => {
            // Aqui estão os dados do arquivo JSON
            console.log(data);
            return data;
        })
        .catch(error => {
            console.error('Erro ao acessar banco:', error);
        });
}

// Metodo que deleta o notificacao indicado pelo id
function deleteNotificacao(id){
    fetch(URL + '/' + id, {
        method: 'DELETE',
    })
    .then(response => response.json())
    .then(() => location.reload())
    .catch(error => {
        console.error('Erro ao acessar banco:', error);
    });
}

// Metodo que adiciona o notificacao ao banco
function createNotificacao(usuario){
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

// Metodo que atualiza um notificacao já existente
function updateNotificacao(usuario){
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

//Metodo que busca todos os notificacaos que pertecem ao usuário
function getNotificacaoByUserId(userId){
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            return data.filter(objeto => objeto.usuarioId === userId);
        })
        .catch(error => {
            console.error('Erro ao acessar banco:', error);
        });
}
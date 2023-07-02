const URL_NOTIFICACOES = 'https://api-autobook-production.up.railway.app/notificacoes'
const URL_NOTIFICACOES_USUARIOS= 'https://api-autobook-production.up.railway.app/usuarios'

// Metodo que retorna todos os notificacoes do banco
async function getAllNotificacoes() {
    try {
        const response = await fetch(URL_NOTIFICACOES);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao acessar banco:', error);
    }
}

// Metodo que retorna o notificacao que possui o Id especificado
async function getNotificacaoById(id) {
    try {
        const response = await fetch(URL_NOTIFICACOES + '/' + id);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao acessar banco:', error);
    }
}

// Metodo que deleta o notificacao indicado pelo id
async function deleteNotificacao(id) {
    try {
        const response = await fetch(URL_NOTIFICACOES + '/' + id, {
            method: 'DELETE',
        });
        // const data = await response.json();
        // return data;
        // location.reload()
        return true;
    } catch (error) {
        console.error('Erro ao acessar banco:', error);
        return false;
    }
}

// Metodo que adiciona o notificacao ao banco
async function createNotificacao(notificacao) {
    try {
        const response = await fetch(URL_NOTIFICACOES, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: notificacao
        });
        // const data = await response.json();
        // return data;
        location.reload()
    } catch (error) {
        console.error('Erro ao acessar banco:', error);
    }
}

// Metodo que atualiza um notificacao já existente
async function updateNotificacao(notificacao, id) {
    try {
        const response = await fetch(URL_NOTIFICACOES + '/' + id, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: notificacao
        });
        // const data = await response.json();
        // return data;
        location.reload()
    } catch (error) {
        console.error('Erro ao acessar banco:', error);
    }
}

//Metodo que busca todos os notificacaos que pertecem ao usuário
async function getNotificacaoByUserId(userId) {
    try {
        const response = await fetch(URL_NOTIFICACOES);
        const data = await response.json();
        const filteredData = data.filter(objeto => objeto.usuarioId === userId);
        return filteredData;
    } catch (error) {
        console.error('Erro ao acessar banco:', error);
    }
}

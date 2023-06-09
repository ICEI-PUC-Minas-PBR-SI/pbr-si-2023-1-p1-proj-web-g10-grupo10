const URL = 'http://localhost:3000'
const URLprodutos = 'http://localhost:3000/produtos'

// Metodo que retorna todos os usuarios do banco
function getAllUsuarios() {
    fetch(URL + '/usuarios')
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error('Erro ao ler o arquivo JSON:', error);
        });
}

// Metodo que retorna o usuário que possui o Id especificado
function getUsuarioById(id) {
    fetch(URL + '/usuarios/' + id)
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error('Erro ao ler o arquivo JSON:', error);
        });
}

// Metodo que deleta o usuário indicado pelo id
function deleteUsuario(id){
    let produtos = getProdutoByUserId(id);

    // valida se o usuario possui produtos caso exista não deixa deletar
    if(produtos != null && produtos != undefined && produtos.length > 0){
        return false;
    }

    fetch(URL + '/usuarios/' + id, {
        method: 'DELETE',
    })
    .then(response => response.json())
    .then(() => location.reload())
    .catch(error => {
        console.error('Erro ao acessar banco:', error);
    });
}

// Metodo que adiciona o usuário ao banco
function createUsuario(usuario){
    fetch(URL + '/usuarios/', {
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

// Metodo que atualiza um usuário já existente
function updateUsuario(usuario){
    fetch(URL + '/usuarios/', {
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

//Metodo que busca todos os produtos que pertecem ao usuário
function getProdutoByUserId(userId){
    fetch(URLprodutos)
        .then(response => response.json())
        .then(data => {
            return data.filter(objeto => objeto.usuarioId === userId)
        })
        .catch(error => {
            console.error('Erro ao acessar banco:', error);
        });
}

function login(nome, senha){
    fetch(URL + '/usuarios')
        .then(response => response.json())
        .then(data => {
            let existeLogin = data.filter(obj => obj.nome === nome && obj.senha === senha)

            if(existeLogin.length > 0){
                return true
            }

            return false
        })
        .catch(error => {
            console.error('Erro ao ler o arquivo JSON:', error);
        });
}
const URL = 'http://localhost:3000/produtos'
const URLusuarios = 'http://localhost:3000/usuarios'

// Metodo que retorna todos os produtos do banco
function getAllProdutos() {
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error('Erro ao acessar banco:', error);
        });
}

// Metodo que retorna o produto que possui o Id especificado
function getProdutoById(id) {
    fetch(URL + '/' + id)
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error('Erro ao acessar banco:', error);
        });
}

// Metodo que deleta o produto indicado pelo id
function deleteProduto(id){
    fetch(URL + '/' + id, {
        method: 'DELETE',
    })
    .then(response => response.json())
    .then(() => location.reload())
    .catch(error => {
        console.error('Erro ao acessar banco:', error);
    });
}

// Metodo que adiciona o produto ao banco
function createProduto(usuario){
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

// Metodo que atualiza um produto já existente
function updateProduto(usuario){
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

//Metodo que busca todos os produtos que pertecem ao usuário
function getProdutoByUserId(userId){
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            return data.filter(objeto => objeto.usuarioId === userId);
        })
        .catch(error => {
            console.error('Erro ao acessar banco:', error);
        });
}
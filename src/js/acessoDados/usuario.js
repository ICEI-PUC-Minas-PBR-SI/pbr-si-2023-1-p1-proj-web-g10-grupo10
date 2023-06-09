const URL = 'http://localhost:3000'

// Metodo que retorna todos os usuarios do banco
function getAllUsuarios() {
    fetch(URL + '/usuarios')
        .then(response => response.json())
        .then(data => {
            // Aqui estão os dados do arquivo JSON
            console.log(data);
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
            // Aqui estão os dados do arquivo JSON
            console.log(data);
        })
        .catch(error => {
            console.error('Erro ao ler o arquivo JSON:', error);
        });
}

// Metodo que deleta o usuário indicado pelo id
function deleteUsuario(id){
    fetch(URL + '/usuarios/' + id, {
        method: 'DELETE',
    })
    .then(response => response.json())
    .then(() => location.reload());
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
    .then(() => location.reload());
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
    .then(() => location.reload());
}
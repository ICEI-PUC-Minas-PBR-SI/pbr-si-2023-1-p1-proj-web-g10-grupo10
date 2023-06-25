const URL = 'http://localhost:3000'
const URLprodutos = 'http://localhost:3000/produtos'

// Metodo que retorna todos os usuarios do banco
async function getAllUsuarios() {
    try {
        const response = await fetch(URL + '/usuarios');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao ler o arquivo JSON:', error);
    }
}

// Metodo que retorna o usuário que possui o Id especificado
async function getUsuarioById(id) {
    try {
        const response = await fetch(URL + '/usuarios/' + id);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao ler o arquivo JSON:', error);
    }
}

// Metodo que deleta o usuário indicado pelo id
async function deleteUsuario(id) {
    try {
        let produtos = await getProdutoByUserId(id);

        // valida se o usuario possui produtos caso exista não deixa deletar
        if (produtos != null && produtos != undefined && produtos.length > 0) {
            return false;
        }

        const response = await fetch(URL + '/usuarios/' + id, {
            method: 'DELETE',
        });
        // const data = await response.json();
        // return data;
        location.reload()
    } catch (error) {
        console.error('Erro ao acessar banco:', error);
    }
}

// Metodo que adiciona o usuário ao banco
async function createUsuario(usuario) {
    try {
        const response = await fetch(URL + '/usuarios/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: usuario
        });
        // const data = await response.json();
        // return data;
        location.reload()
    } catch (error) {
        console.error('Erro ao acessar banco:', error);
    }
}

// Metodo que atualiza um usuário já existente
async function updateUsuario(usuario, id) {
    try {
        const response = await fetch(URL + '/usuarios/' + id, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: usuario
        });
        // const data = await response.json();
        // return data;
        location.reload()
    } catch (error) {
        console.error('Erro ao acessar banco:', error);
    }
}

//Metodo que busca todos os produtos que pertecem ao usuário
async function getProdutoByUserId(userId) {
    try {
        const response = await fetch(URLprodutos);
        const data = await response.json();
        const filteredData = data.filter(objeto => objeto.usuarioId === userId);
        return filteredData;
    } catch (error) {
        console.error('Erro ao acessar banco:', error);
    }
}

//Metodo que busca o usuario baseado no email
async function getUsuarioByEmail(email) {
    try {
        const response = await fetch(URL + '/usuarios');
        const data = await response.json();
        const filteredData = data.filter(objeto => objeto.email === email);
        return filteredData;
    } catch (error) {
        console.error('Erro ao acessar banco:', error);
    }
}

async function loginUsuario(email, senha) {
    try {
        const response = await fetch(URL + '/usuarios');
        const data = await response.json();
        const existeLogin = data.filter(obj => obj.email === email && obj.senha === senha);

        if (existeLogin.length > 0) {
            const usuario = {
                id: existeLogin.id,
                email: existeLogin.email,
                tipoUsuario: existeLogin.tipoUsuario,
            }
            const usuarioString = JSON.stringify(usuario)
            localStorage.setItem('usuario', usuarioString);
            return true;
        }

        return false;
    } catch (error) {
        console.error('Erro ao ler o arquivo JSON:', error);
    }
}
const URL_PRODUTOS = 'http://localhost:3000/produtos'
const URL_PRODUTOS_USUARIOS = 'http://localhost:3000/usuarios'

// Metodo que retorna todos os produtos do banco
async function getAllProdutos() {
    try {
        const response = await fetch(URL_PRODUTOS);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao acessar banco:', error);
    }
}

// Metodo que retorna o produto que possui o Id especificado
async function getProdutoById(id) {
    try {
        const response = await fetch(URL_PRODUTOS + '/' + id);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao acessar banco:', error);
    }
}

// Metodo que deleta o produto indicado pelo id
async function deleteProduto(id) {
    try {
        const response = await fetch(URL_PRODUTOS + '/' + id, {
            method: 'DELETE',
        });
        const data = await response.json();
        // Você pode retornar o data se quiser utilizá-lo em algum lugar
        // return data;
        // location.reload()
        return true;
    } catch (error) {
        return false;
        console.error('Erro ao acessar banco:', error);
    }
}

// Metodo que adiciona o produto ao banco
async function createProduto(produto) {
    try {
        const response = await fetch(URL_PRODUTOS, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(produto)
        })
        // const data = await response.json()
        // return data
        // location.reload()
        return true;
    } catch (error) {
        console.error('Erro ao acessar banco:', error);
        return false;
    }
}

// Metodo que atualiza um produto já existente
async function updateProduto(produto, id) {
    try{
        const response = await fetch(URL_PRODUTOS + '/' + id, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(produto)
        })
        // const data = await response.json();
        // location.reload()
        return true;
    }
    catch(error){
        
        console.error('Erro ao acessar banco:', error);
        return false;
    } 
}

//Metodo que busca todos os produtos que pertecem ao usuário
async function getProdutoByUserId(userId) {
    try{
        const response = await fetch(URL_PRODUTOS);
        const data = await response.json();
        return data.filter(objeto => objeto.usuarioId === userId);
    }
    catch(error){
        console.error('Erro ao acessar banco:', error);
    }
}

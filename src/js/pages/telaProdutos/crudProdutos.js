async function RecuperaProdutos(id) {
    let tabela = document.getElementById("TabelaProdutosBody");

    let produtos = await getProdutoByUserId(id)

    produtos.forEach(item => {
        let template = `
            <tr class="table-line">
                <td><img id="imgTabelaProd"
                        src="${item.imagem}" alt="">
                </td>
                <td>${item.nomeDaPeca}</td>
                <td>${item.carro}</td>
                <td>${item.modelo}</td>
                <td>${item.ano}</td>
                <td class="item-acoes">
                    <button class="btn btn-light" onclick="RecuperaDadosProdutoModalEdit(${item.id})" data-bs-toggle="modal" data-bs-target="#modalEdicao"><i
                            class="fas fa-edit"></i></button>
                    <button class="btn btn-light" onclick="RecuperaDadosProdutoModalDelete(${item.id})" data-bs-toggle="modal" data-bs-target="#modalDelecao"><i
                            class="fas fa-trash"></i></button>
                    <button class="btn btn-light" onclick="RecuperaDadosProdutoModalDetalhes(${item.id})" data-bs-toggle="modal" data-bs-target="#modalDetalhes"><i
                            class="fas fa-briefcase"></i></button>
                </td>
            </tr>`

        tabela.innerHTML += template
    });
}

async function RecuperaDadosProdutoModalEdit(id) {
    let produto = await getProdutoById(id)

    let botao = document.getElementById("BotaoModalEditProd");
    let inputNome = document.getElementById("nomeProdutoEdit");
    let inputCarro = document.getElementById("carroEdit");
    let inputModelo = document.getElementById("modeloEdit");
    let inputAno = document.getElementById("anoEdit");
    let inputPreco = document.getElementById("valorEdit");
    let inputQtde = document.getElementById("qtdeEdit");
    let inputMarca = document.getElementById("marcaEdit");

    botao.setAttribute('data-id',id)
    // Preenche os campos de entrada com os dados do produto
    inputNome.value = produto.nomeDaPeca;
    inputCarro.value = produto.carro;
    inputModelo.value = produto.modelo;
    inputAno.value = produto.ano;
    inputPreco.value = produto.valor;
    inputQtde.value = produto.quantidadeDisponivel;
    inputMarca.value = produto.marca;
}

async function RecuperaDadosProdutoModalDetalhes(id) {
    let produto = await getProdutoById(id)

    let inputNome = document.getElementById("tituloProdutoDet");
    let inputCarro = document.getElementById("carroDet");
    let inputModelo = document.getElementById("modeloDet");
    let inputAno = document.getElementById("anoDet");
    let inputPreco = document.getElementById("precoDet");
    let inputQtde = document.getElementById("qtdeDet");
    let inputImg = document.getElementById("imgProdutoDet");

    // Preenche os campos de entrada com os dados do produto
    inputNome.innerText = produto.nomeDaPeca + ' - ' + produto.marca
    inputCarro.innerText = 'Carro: ' + produto.carro;
    inputModelo.innerText = 'Modelo: ' + produto.modelo;
    inputAno.innerText = 'Ano: ' + produto.ano.split('-')[0]
    inputPreco.innerHTML = '<i class="fas fa-money-bill-wave" style="color: #24aa22;"></i>\nR$' + produto.valor
    inputQtde.innerText = 'Qtde: ' + produto.quantidadeDisponivel
    inputImg.src = produto.imagem
}

async function RecuperaDadosProdutoModalDelete(id) {
    let produto = await getProdutoById(id)

    let inputNome = document.getElementById("produtoDelete");
    let deleteBotao = document.getElementById("botaoDeleteModal");

    deleteBotao.setAttribute('data-id', id);

    // Preenche os campos de entrada com os dados do produto
    inputNome.innerText = produto.nomeDaPeca + ' - ' + produto.marca
}

async function CreateProdutoModal() {
    let fileInput = document.getElementById('formFileCreateProduto');
    let inputNome = document.getElementById("nomeProdCreate");
    let inputCarro = document.getElementById("carroCreate");
    let inputModelo = document.getElementById("modeloCreate");
    let inputAno = document.getElementById("anoCreate");
    let inputPreco = document.getElementById("valorCreate");
    let inputQtde = document.getElementById("qtdeCreate");
    let inputMarca = document.getElementById("marcaCreate");

    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();

        reader.addEventListener('load', function () {
            let img64 = reader.result;
            let novoProduto = {
                usuarioId: 1, //Alterar após login pronto
                nomeDaPeca: inputNome.value,
                carro: inputCarro.value,
                modelo: inputModelo.value,
                marca: inputMarca.value,
                ano: inputAno.value,
                imagem: img64,
                valor: inputPreco.value,
                quantidadeDisponivel: inputQtde.value
            }

            let deuCerto = createProduto(JSON.stringify(novoProduto));

            if (deuCerto == true) location.reload();
        });

        reader.readAsDataURL(file);
    }
}

async function DeleteProdutoModal() {
    let deleteBotao = document.getElementById("botaoDeleteModal");

    let deuCerto = deleteProduto(deleteBotao.getAttribute('data-id'));

    if (deuCerto == true) location.reload();
}

async function SalvarModalEdit() {

    let botao = document.getElementById("BotaoModalEditProd");
    let fileInput = document.getElementById("formFileEditProduto");
    let inputNome = document.getElementById("nomeProdutoEdit");
    let inputCarro = document.getElementById("carroEdit");
    let inputModelo = document.getElementById("modeloEdit");
    let inputMarca = document.getElementById("marcaEdit");
    let inputAno = document.getElementById("anoEdit");
    let inputPreco = document.getElementById("valorEdit");
    let inputQtde = document.getElementById("qtdeEdit");

    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();

        reader.addEventListener('load', function () {
            let img64 = reader.result;
            let novoProduto = {
                usuarioId: 1, //Alterar após login pronto
                nomeDaPeca: inputNome.value,
                carro: inputCarro.value,
                modelo: inputModelo.value,
                marca: inputMarca.value,
                ano: inputAno.value,
                imagem: img64,
                valor: inputPreco.value,
                quantidadeDisponivel: inputQtde.value
            }

            let deuCerto = updateProduto(JSON.stringify(novoProduto),botao.getAttribute('data-id'));

            if (deuCerto == true) location.reload();
        });

        reader.readAsDataURL(file);
    }
}
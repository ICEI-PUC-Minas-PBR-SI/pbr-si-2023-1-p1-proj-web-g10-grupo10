const produtosHTML = await getHTMLProdutos();
const caixaProdutos = $("#caixa-produtos");
caixaProdutos.html(produtosHTML);



async function getHTMLProdutos() {
  const  produtos = await getAllProdutos();
  let produtosHTML = '';
  
  produtos.forEach(produto => {
    const ano = new Date(produto.ano).getFullYear();
    const strDisponivel = produto.quantidadeDisponivel > 0 ? "PRODUTO DISPONIVEL" : "PRODUTO INDISPONIVEL";
    produtosHTML += `
      <div class="col">
        <div class="card" id="prod-${produto.id}" data-bs-toggle="modal" data-bs-target="#produto_${produto.id}">
          <img class="card-img-top" src="${produto.imagem}" alt="${produto.nomeDaPeca}">
          <div class="card-body">
            <h5 class="card-title">${produto.nomeDaPeca}</h5>
            <p class="card-text">${produto.nomeDaPeca} de carro ${produto.carro}, modelo ${produto.modelo} da marca ${produto.marca}, do ano de ${ano}</p>
            <a class="card-price stretched-link text-success">R$ ${produto.valor}</a>
          </div>
        </div>
        
        <div class="modal fade modal-produto" id="produto_${produto.id}" tabindex="-1" aria-labelledby="produto_${produto.id}" aria-hidden="true">
              <div class="modal-dialog modal-lg">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <div class="img-modal">
                        <img src="${produto.imagem}" alt="${produto.nomeDaPeca}" srcset="">
                    </div>
                    
                    <div class="container-corpo-modal">
                      <h4 class="title">${produto.nomeDaPeca}</h4>
                      <div class="cmp">
                        <span><span class="fw-bold">Ano:</span> ${ano}</span>
                        <span><span class="fw-bold">Carro:</span> ${produto.carro}</span>
                      </div>
                      
                      <div class="cmp">
                        <p> <span class="fw-bold">Marca:</span> ${produto.marca}</p>
                        <p> <span class="fw-bold">Modelo:</span> ${produto.modelo}</p>
                      </div>

                      <div class="cmp">
                        <span class="diponibilidade">${strDisponivel}</span>
                        <span>QTD: ${produto.quantidadeDisponivel}</span>
                      </div>
                      <span class="span-price"><i class="fas fa-hand-holding-usd"></i> <span class="price">R$${produto.valor}</span></span>

                    </div>
                  </div>

                  <div class="modal-footer">
                    <div class="cmp">
                      <div class="caixa-qtd-reservas">
                        <span class="btn-qtd" id="btn-menos"><i class="fas fa-minus"></i></span>
                        <span class="qtd-reservas">1</span>
                        <span class="btn-qtd" id="btn-mais"><i class="fas fa-plus"></i></span>
                      </div>
                      <span class="btn-reservar" id="prod_${produto.id}">Reservar</span>
                    </div>
                  </div> 
                </div>
              </div>
            </div>
        
      </div>
    `;
  });
  
    return produtosHTML;
    
}

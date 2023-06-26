//GET /posts?title_like=server
URL_BUSCADOR = "http://localhost:3000/produtos?nomeDaPeca_like=";

async function getProdutoBuscaLike(parametro) {
  try {
      const response = await fetch(URL_BUSCADOR + parametro);
      const data = await response.json();
      return data;
  } catch (error) {
      console.error('Erro ao acessar banco:', error);
  }
}
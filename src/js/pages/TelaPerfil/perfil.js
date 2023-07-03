async function init() {
    const userId = JSON.parse(localStorage.getItem('usuario'));
    let str = '';
    let usuario = await getUsuarioById(userId.id);
    str += `
                <div class="row mx-5 rounded-top-4 border-bottom border-dark" style="background-color: #F1F1F1;">
                <div class="col col-12 col-md-3 py-5">
                    <img src="image/Perfil/user.png" alt="Teste" class="user rounded-circle border border-black">
                </div>
                <div class="col col-md-5 py-5">
                    <h5>${usuario.nome}</h5>
                    <p><b>Código:</b> ${usuario.id}</p>
                </div>
                <div class="col col-md-3 py-5">
                <button class="btn btn-light" onclick="RecuperaDadosModalEdit(${usuario.id})" data-bs-toggle="modal" data-bs-target="#modalEdicao"><i
                            class="edit-icon fas fa-edit"></i></button>
                </div>
            </div>
            <div class="row mx-5 py-3 rounded-bottom-4" style="background-color: #F1F1F1;">
                <div class="col col-12">
                    <h2>Dados Pessoais:</h2>
                    <form>
                        <div class="row">
                            <div class="col col-12 col-md-6 mb-3">
                                <label for="exampleInputEmail1" class="form-label">Nome</label>
                                <div class="col-sm-10">
                                    <input type="text" readonly class="form-control" value="${usuario.nome}">
                                </div>
                            </div>
                            <div class="col col-12 col-md-6 mb-3">
                                <label for="exampleInputEmail1" class="form-label">Telefone</label>
                                <div class="col-sm-10">
                                    <input type="text" readonly class="form-control" value="${usuario.Telefone}">
                                </div>
                            </div>
                            <div class="col-12 mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email</label>
                                <div class="col-sm-10">
                                    <input type="text" readonly class="form-control" id="staticEmail"
                                        value="${usuario.email}">
                                </div>
                            </div>
                            <div class="col-12 mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1">
                            </div>
                        </div>
                        `;

    document.getElementById('Perfil').innerHTML = str;

}


async function RecuperaDadosModalEdit(id) {
    let produto = await getProdutoById(id);
    
    let inputNome = document.getElementById("nomeEdit");
    let inputEmail = document.getElementById("emailEdit");
    let inputTelefone = document.getElementById("telefoneEdit");
    let inputSenha = document.getElementById("senhaEdit");
    
    inputNome.value = produto.nome;
    inputEmail.value = produto.email;
    inputTelefone.value = produto.telefone;
    inputSenha.value = "";
    
    const modal = new bootstrap.Modal(document.getElementById("modalCriacao"));
    modal.show();
    }

async function SalvarModalEdit() {

    let inputNome = document.getElementById("nomeEdit");
    let inputEmail = document.getElementById("emailEdit");
    let inputTelefone = document.getElementById("telefoneEdit");
    let inputSenha = document.getElementById("senhaEdit");
  
    let novoUsuario = {
      nome: inputNome.value,
      email: inputEmail.value,
      telefone: inputTelefone.value,
      senha: inputSenha.value
    };
  
    let deuCerto = await updateUsuario(novoUsuario);
  
    if (deuCerto) {
      location.reload();
    }
  }
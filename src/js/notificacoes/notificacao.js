async function recuperarNotificacao(userId,tipoUsuario){
    
    let notificacao = await getNotificacaoByUserId(userId)

    let container = document.getElementById('ContainerNotificacoes')
    
    if(tipoUsuario == 1){
        notificacao.forEach (item => {
            let template = `
            <div id="notificacao${item.id}" class="card" style="width: 18rem;">
                <div class="card-header">
                    <button type="button" class="btn btn-outline-danger" onclick="excluirNotificacao(${item.id},'notificacao${item.id}')" aria-label="Fechar">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="card-body">
                    <h5 class="card-title">Nova Reserva</h5>
                    <p class="card-text">${item.mensagem}</p>
                </div>
            </div>
            `
            container.innerHTML += template
        }) 
    }
    else{
        notificacao.forEach (item => {
            let template = `
            <div id="notificacao${item.id}" class="card" style="width: 18rem;">
                <div class="card-header">
                    <button type="button" class="btn btn-outline-danger" onclick="excluirNotificacao(${item.id},'notificacao${item.id}')" aria-label="Fechar">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="card-body">
                    <h5 class="card-title">Atenção!</h5>
                    <p class="card-text">${item.mensagem}</p>
                </div>
            </div>
            `
            container.innerHTML += template
        }) 
    }
}

function excluirNotificacao(notId,idCard){
    var divElement = document.getElementById(idCard)

    if(deleteNotificacao(notId) == true){
        divElement.remove()
    }
    else{

    }
}
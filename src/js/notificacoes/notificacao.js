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

async function excluirNotificacao(notId,idCard){
    var divElement = document.getElementById(idCard)

    let aux = await deleteNotificacao(notId)

    if(aux == true){
        divElement.style.display = 'none';
    }
    else{
        exibirNotificacao('Erro','Não foi possível excluir','error')
    }
}

async function TestarVencimento(userId){
    let reservas = await getReservasByUserId(userId)

    reservas.forEach(item => {
        let partesData1 = item.dataLimite.split('/');
        let data1 = new Date(partesData1[2], partesData1[1] - 1, partesData1[0]);
        let dataAtual = new Date();

        // Calcular a diferença em milissegundos entre as duas datas
        let diffEmMilissegundos = Math.abs(dataAtual - data1);

        // Converter a diferença em milissegundos para dias
        let diffEmDias = Math.ceil(diffEmMilissegundos / (1000 * 60 * 60 * 24));

        if(diffEmDias <= 2){
            let notificacao = {
                usuarioId: userId,
                reservaId: item.id,
                mensagem: `Uma de suas reservas vão vencer em breve!!`
            }
          
            createNotificacao(JSON.stringify(notificacao))
        }
    })
}
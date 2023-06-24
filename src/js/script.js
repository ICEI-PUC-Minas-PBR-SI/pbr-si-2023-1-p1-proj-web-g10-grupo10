
$(document).ready(function(){
    controlaModais();
});

const controlaModais = () => {
    $('#filtro').click(() =>{
        $('#modal-filtro').modal('show');
    })
}


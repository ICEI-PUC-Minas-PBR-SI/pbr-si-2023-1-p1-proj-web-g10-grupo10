const formPesquisa = $("#form-pesquisa");

formPesquisa.submit(function (event) {
    event.preventDefault();
    const pesquisa = $("#inpt-pesquisa").val();
    if (pesquisa.length > 0) {
        window.location.href = `pesquisa.html?pesquisa=${pesquisa}`;
    }
});
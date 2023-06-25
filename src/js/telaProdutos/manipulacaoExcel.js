function importarProdutos(usuarioId) {
    var file = document.getElementById("formFileExcel").files[0];

    if (file) {
        var reader = new FileReader();

        reader.onload = function (e) {
            var fileName = file.name;
            var fileExtension = fileName.split(".").pop().toLowerCase();

            if (fileExtension === "xlsx" || fileExtension === "xls") {
                var data = new Uint8Array(e.target.result);
                var workbook = XLSX.read(data, { type: "array", header: 1 }); // Passa { header: 1 } como opção

                var sheetName = workbook.SheetNames[0];
                var worksheet = workbook.Sheets[sheetName];

                // Obtém os dados da planilha como um objeto
                var jsonData = XLSX.utils.sheet_to_json(worksheet, { raw: false });

                jsonData.forEach(p => {

                    let novoProduto = {
                        usuarioId: usuarioId,
                        nomeDaPeca: p.NomeDaPeca,
                        carro: p.Carro,
                        modelo: p.Modelo,
                        marca: p.Marca,
                        ano: p.Ano,
                        imagem: noImg,
                        valor: p.Valor.replace('R$', '').replace(' ', ''),
                        quantidadeDisponivel: p.QuantidadeDisponivel
                    }

                    createProduto(novoProduto)
                });

                location.reload()
            }
            else if (fileExtension === "csv") {
                
            }


        };

        reader.readAsArrayBuffer(file);
    }
}
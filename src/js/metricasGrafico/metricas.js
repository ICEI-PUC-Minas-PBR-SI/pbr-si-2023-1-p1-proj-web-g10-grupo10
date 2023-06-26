const ctx = document.getElementById('myChart').getContext("2d")

const gradient = ctx.createLinearGradient(0, 0, 0, 400)
gradient.addColorStop(0, '#5cffca')
gradient.addColorStop(1, '#66ff')

const TIPO_USUARIO_LOJA = 1;
const STATUS_CONCLUIDO = 1

//const usuario = JSON.parse(localStorage.getItem('usuario'));
const arrQtdReservasMes = await getQuantidadeReservasMes();

let arrQuantidadeVendas = new Array(12);
arrQuantidadeVendas.fill(0);
for(let item in arrQtdReservasMes){
  arrQuantidadeVendas[arrQtdReservasMes[item].mes - 1] = arrQtdReservasMes[item].quantidadeReservas;
}
console.log(arrQuantidadeVendas);

async function getQuantidadeReservasMes(){
  const arrReservas = await getReservasByLojaIdStatus(2, STATUS_CONCLUIDO);

  const arrQtdReservasMes = arrReservas.reduce(async(arrayAcumulador, reserva) =>{
    const partes = reserva.dataLimite.split("/");
    const dataReorganizada = partes[1] + "/" + partes[0] + "/" + partes[2];
    
    const dataLimite = new Date(dataReorganizada);
    const mes = dataLimite.getMonth() + 1;
    if (!arrayAcumulador[mes]) {
      arrayAcumulador[mes] = {
        mes: mes,
        quantidadeReservas: 0
      };
    }

    arrayAcumulador[mes].quantidadeReservas += reserva.quantidade;

    return arrayAcumulador;
  },[]);

  return arrQtdReservasMes;
}


const labels = [
  'jan',
  'fev',
  'mar',
  'abr',
  'mai',
  'jun',
  'jul',
  'ago',
  'set',
  'out',
  'nov',
  'dez'
]

const data = {
  labels,
  datasets: [{
    //quantidade fictícia vendida em cada mes
    data:  [...arrQuantidadeVendas],
    label: "Progressão de Reservas",
    fill: true,
    backgroundColor: gradient

  }]
}

console.log(data);

const config = {
  type: 'line',
  data,
  options: {
    responsive: true,
    //personalização do grafico
    radius: 0,
    HouverRadius: 0,
    //indicação e detalhação de moeda no eixo y
    scales: {
      y: {
        ticks: {
          callback: function (value) {
            let finalValue = value.toFixed(0)
            //convertentedo . em , na moeda
            return finalValue.replace('.', ',')
            //no final cabe a definir o nivel de lucro com a venda das peças, ex: mil
          }
        }
      }
    }
  }
}

const myChart = new Chart(ctx, config)
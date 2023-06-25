const ctx = document.getElementById('myChart').getContext("2d")

const gradient = ctx.createLinearGradient(0, 0, 0, 400)
gradient.addColorStop(0, '#5cffca')
gradient.addColorStop(1, '#66ff')

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
    data: [1500, 2100, 2600, 3400, 4000, 5200, 4800, 3000, 3700, 4600, 6000, 6400],
    label: "Progressão de vendas",
    fill: true,
    backgroundColor: gradient

  }]
}

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
            let finalValue = value.toFixed(2)
            //convertentedo . em , na moeda
            return 'R$' + finalValue.replace('.', ',') + 'mil'
            //no final cabe a definir o nivel de lucro com a venda das peças, ex: mil
          }
        }
      }
    }
  }
}

const myChart = new Chart(ctx, config)
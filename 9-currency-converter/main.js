
/**
 * Com a API MutationObserver do DOM. Podemos observar mudanças em um elemento do DOM 
 * e executar uma função quando alguma mudança é detectada. Podemos utilizá-la para 
 * monitorar mudanças no conteúdo de um elemento. 
 *
 * Assim com um event listener no input e observando as mudanças no conteúdo de 
 * dos elementos HTML selectedText01 e selectedText02, podemos refletir as mudanças 
 * imediatamente na tela do usuário :)
**/

// Handle selected element
const selected01 = document.getElementById('selected01')
const moneyContainer01 = document.getElementById('money-container01')
const chevronDown01 = document.querySelector('.chevron-down01')
const optionsContainer01 = document.getElementById('options01')
const optionsItems01 = document.querySelectorAll('.option01')
const amountInput01 = document.getElementById('amount01')
const selectedText01 = document.getElementById('selected-txt-value01')
const selectedFlag01 = document.getElementById('flag01')

selected01.addEventListener('click', () => {
  if (optionsContainer01.style.display === 'block') {
    moneyContainer01.style.border = '0.2rem solid #94a3b8'
    optionsContainer01.style.display = 'none'
    chevronDown01.style.rotate = '0deg'
  } else {
    moneyContainer01.style.border = '0.2rem solid #7C3AED'
    chevronDown01.style.rotate = '180deg'
    optionsContainer01.style.display = 'block'
  }
})
// criar overlay transparente e handle click outside
optionsItems01.forEach((option) => {
  option.addEventListener('click', () => {
    const selectedText = option.textContent.trim()
    console.log(selectedText)
    selectedText01.textContent = selectedText
    chevronDown01.style.rotate = '0deg'
    selectedFlag01.src = `./assets/flags/${selectedText}.svg`
    moneyContainer01.style.border = '0.2rem solid #94a3b8'
    optionsContainer01.style.display = 'none'
  })
})

const selected02 = document.getElementById('selected02')
const moneyContainer02 = document.getElementById('money-container02')
const chevronDown02 = document.querySelector('.chevron-down02')
const optionsContainer02 = document.getElementById('options02')
const optionsItems02 = document.querySelectorAll('.option02')
const amountValue02 = document.getElementById('amount02')
const selectedText02 = document.getElementById('selected-txt-value02')
const selectedFlag02 = document.getElementById('flag02')

selected02.addEventListener('click', () => {
  if (optionsContainer02.style.display === 'block') {
    moneyContainer02.style.border = '0.2rem solid #94a3b8'
    optionsContainer02.style.display = 'none'
    chevronDown02.style.rotate = '0deg'
  } else {
    moneyContainer02.style.border = '0.2rem solid #7C3AED'
    chevronDown02.style.rotate = '180deg'
    optionsContainer02.style.display = 'block'
  }
})

optionsItems02.forEach((option) => {
  option.addEventListener('click', () => {
    const selectedText = option.textContent.trim()
    console.log(selectedText)
    selectedText02.textContent = selectedText
    chevronDown02.style.rotate = '0deg'
    selectedFlag02.src = `./assets/flags/${selectedText}.svg`
    moneyContainer02.style.border = '0.2rem solid #94a3b8'
    optionsContainer02.style.display = 'none'
  })
})

// Cria uma nova instância do MutationObserver
const observer = new MutationObserver(() => {
  // console.log('O conteúdo de selectedText01, selectedText02 mudou!')
  handleInputValue()
})

// Configurações do MutationObserver
const config = { childList: true, subtree: true }

// Inicia a observação dos elementos selecionados
observer.observe(selectedText01, config)
observer.observe(selectedText02, config)

amountInput01.addEventListener('input', function () {
  handleInputValue()
})

function handleInputValue() {
  const convertFrom = selectedText01.textContent
  const convertTo = selectedText02.textContent

  if (selectedText01.textContent === selectedText02.textContent) {
    const result = Number(amountInput01.value) * 1
    amountValue02.value = result.toFixed(2)
  }

  if (convertFrom === 'USD') {
    if (convertTo === 'BRL') {
      const result = Number(amountInput01.value) * 5.25
      amountValue02.value = result.toFixed(2)
    } else if (convertTo === 'EUR') {
      const result = Number(amountInput01.value) * 0.93
      amountValue02.value = result.toFixed(2)
    } else if (convertTo === 'JPY') {
      const result = Number(amountInput01.value) * 133.18
      amountValue02.value = result.toFixed(2)
    } else if (convertTo === 'CNY') {
      const result = Number(amountInput01.value) * 6.85
      amountValue02.value = result.toFixed(2)
    } else if (convertTo === 'CHF') {
      const result = Number(amountInput01.value) * 0.91
      amountValue02.value = result.toFixed(2)
    }
  }

  if (convertFrom === 'BRL') {
    if (convertTo === 'USD') {
      const result = Number(amountInput01.value) * 0.19
      amountValue02.value = result.toFixed(2)
    } else if (convertTo === 'EUR') {
      const result = Number(amountInput01.value) * 0.18
      amountValue02.value = result.toFixed(2)
    } else if (convertTo === 'JPY') {
      const result = Number(amountInput01.value) * 25.42
      amountValue02.value = result.toFixed(2)
    } else if (convertTo === 'CNY') {
      const result = Number(amountInput01.value) * 1.31
      amountValue02.value = result.toFixed(2)
    } else if (convertTo === 'CHF') {
      const result = Number(amountInput01.value) * 0.17
      amountValue02.value = result.toFixed(2)
    }
  }

  if (convertFrom === 'EUR') {
    if (convertTo === 'USD') {
      const result = Number(amountInput01.value) * 1.07
      amountValue02.value = result.toFixed(2)
    } else if (convertTo === 'BRL') {
      const result = Number(amountInput01.value) * 5.64
      amountValue02.value = result.toFixed(2)
    } else if (convertTo === 'JPY') {
      const result = Number(amountInput01.value) * 143.19
      amountValue02.value = result.toFixed(2)
    } else if (convertTo === 'CNY') {
      const result = Number(amountInput01.value) * 7.35
      amountValue02.value = result.toFixed(2)
    } else if (convertTo === 'CHF') {
      const result = Number(amountInput01.value) * 0.98
      amountValue02.value = result.toFixed(2)
    }
  }

  if (convertFrom === 'JPY') {
    if (convertTo === 'USD') {
      const result = Number(amountInput01.value) * 0.0075
      amountValue02.value = result.toFixed(2)
    } else if (convertTo === 'BRL') {
      const result = Number(amountInput01.value) * 0.039
      amountValue02.value = result.toFixed(2)
    } else if (convertTo === 'EUR') {
      const result = Number(amountInput01.value) * 0.007
      amountValue02.value = result.toFixed(2)
    } else if (convertTo === 'CNY') {
      const result = Number(amountInput01.value) * 0.051
      amountValue02.value = result.toFixed(2)
    } else if (convertTo === 'CHF') {
      const result = Number(amountInput01.value) * 0.0068
      amountValue02.value = result.toFixed(2)
    }
  }

  if (convertFrom === 'CNY') {
    if (convertTo === 'USD') {
      const result = Number(amountInput01.value) * 0.15
      amountValue02.value = result.toFixed(2)
    } else if (convertTo === 'BRL') {
      const result = Number(amountInput01.value) * 0.77
      amountValue02.value = result.toFixed(2)
    } else if (convertTo === 'EUR') {
      const result = Number(amountInput01.value) * 0.14
      amountValue02.value = result.toFixed(2)
    } else if (convertTo === 'JPY') {
      const result = Number(amountInput01.value) * 19.5
      amountValue02.value = result.toFixed(2)
    } else if (convertTo === 'CHF') {
      const result = Number(amountInput01.value) * 0.13
      amountValue02.value = result.toFixed(2)
    }
  }

  if (convertFrom === 'CHF') {
    if (convertTo === 'USD') {
      const result = Number(amountInput01.value) * 1.1
      amountValue02.value = result.toFixed(2)
    } else if (convertTo === 'BRL') {
      const result = Number(amountInput01.value) * 5.77
      amountValue02.value = result.toFixed(2)
    } else if (convertTo === 'EUR') {
      const result = Number(amountInput01.value) * 1.02
      amountValue02.value = result.toFixed(2)
    } else if (convertTo === 'JPY') {
      const result = Number(amountInput01.value) * 146.38
      amountValue02.value = result.toFixed(2)
    } else if (convertTo === 'CNY') {
      const result = Number(amountInput01.value) * 7.51
      amountValue02.value = result.toFixed(2)
    }
  }
}

// Chart
const options = {
  series: [
    {
      name: 'cambio',
      data: [
        {
          x: new Date('2022-02-12').getTime(),
          y: 5.18,
        },
        {
          x: new Date('2022-02-13').getTime(),
          y: 5.3,
        },
        {
          x: new Date('2022-02-14').getTime(),
          y: 5.18,
        },
        {
          x: new Date('2022-02-15').getTime(),
          y: 5.11,
        },
        {
          x: new Date('2022-02-16').getTime(),
          y: 5.18,
        },
        {
          x: new Date('2022-02-17').getTime(),
          y: 5.25,
        },
        {
          x: new Date('2022-02-18').getTime(),
          y: 5.18,
        },
        {
          x: new Date('2022-02-19').getTime(),
          y: 5.2,
        },
      ],
    },
  ],
  chart: {
    height: 300,
    type: 'area',
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'straight',
  },
  yaxis: {
    min: 5,
    tickAmount: 4,
    labels: {
      formatter: (value) => {
        return value.toFixed(1).replace('.', ',')
      },
    },
  },
  xaxis: {
    labels: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
    axisTicks: {
      show: false,
    },
  },
  fill: {
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      stops: [0, 90, 100],
    },
  },
  colors: ['#7C3AED'],
  tooltip: {
    custom: function ({ series, seriesIndex, dataPointIndex, w }) {
      return `<div class="tooltip">
    <span>${String(series[seriesIndex][dataPointIndex]).replace(
      '.',
      ','
    )}</span>
    <span>${new Date(
      w.globals.seriesX[seriesIndex][dataPointIndex]
    ).toLocaleDateString('pt-BR', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    })}</span>
    </div>`
    },
  },
}

const chart = new ApexCharts(document.querySelector('#chart'), options)
chart.render()

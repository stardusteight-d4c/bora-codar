// Handle selected element
const selected01 = document.getElementById('selected01')
const chevronDown01 = document.querySelector('.chevron-down01')
const optionsContainer01 = document.getElementById('options01')
const optionsItems01 = document.querySelectorAll('.option01')
const amountValue01 = document.getElementById('amount01').value
const selectedText01 = document.getElementById('selected-txt-value01')
const selectedFlag01 = document.getElementById('flag01')

selected01.addEventListener('click', () => {
  if (optionsContainer01.style.display === 'block') {
    optionsContainer01.style.display = 'none'
    chevronDown01.style.rotate = '0deg'
  } else {
    chevronDown01.style.rotate = '180deg'
    optionsContainer01.style.display = 'block'
  }
})

optionsItems01.forEach((option) => {
  option.addEventListener('click', () => {
    const selectedText = option.textContent.trim()
    console.log(selectedText)
    selectedText01.textContent = selectedText
    chevronDown01.style.rotate = '0deg'
    selectedFlag01.src = `./assets/flags/${selectedText}.svg`
    optionsContainer01.style.display = 'none'
  })
})

const selected02 = document.getElementById('selected02')
const chevronDown02 = document.querySelector('.chevron-down02')
const optionsContainer02 = document.getElementById('options02')
const optionsItems02 = document.querySelectorAll('.option02')
const amountValue02 = document.getElementById('amount02').value
const selectedText02 = document.getElementById('selected-txt-value02')
const selectedFlag02 = document.getElementById('flag02')

selected02.addEventListener('click', () => {
  if (optionsContainer02.style.display === 'block') {
    optionsContainer02.style.display = 'none'
    chevronDown02.style.rotate = '0deg'
  } else {
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
    optionsContainer02.style.display = 'none'
  })
})

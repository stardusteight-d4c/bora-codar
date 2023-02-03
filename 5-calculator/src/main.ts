import './style.css'
import { buttonsProps } from './utils/buttonsProps'

const ELEMENTS_ID = {
  app: 'app',
  buttonsContainer: 'buttonsContainer',
  operation: 'operation',
  result: 'result',
}

const rendersButtons = (buttonsContainer: HTMLDivElement) => {
  buttonsProps.map((button) => {
    const props = button?.props
    const prevState = buttonsContainer.innerHTML
    const newChild = `<button type="button" class="${button.styles} button col-span-1">${button.content}</button>`
    if (props) {
      const attributes: string[] = []
      Object.entries(props).forEach(([key, value]: any) => {
        attributes.push(`${key}="${value}"`)
      })
      const newChild = `<button type="button" ${attributes
        .toLocaleString()
        .replace(',', '')} class="${button.styles} button col-span-1">${
        button.content
      }</button>`
      buttonsContainer.innerHTML = prevState + `${newChild}`
    } else {
      buttonsContainer.innerHTML = prevState + `${newChild}`
    }
  })
}

document.querySelector<HTMLDivElement>(`#${ELEMENTS_ID.app}`)!.innerHTML = `
  <div class="flex items-center justify-center h-screen overflow-hidden">
    <main class="calculatorContainer">
      <div class="flex flex-col pt-[54px] px-[54px] gap-y-2">
        <div id=${ELEMENTS_ID.operation} class="text-right !leading-[140%] text-[20px] text-[#6B6B6B]">
        </div>
        <div class="flex items-center justify-between">
          <span class="text-[#6B6B6B]">
            <img src="/src/assets/equals.svg" />
          </span>
          <h2 id=${ELEMENTS_ID.result} class="text-[36px] !leading-[140%]">0</h2>
        </div>
      </div>
      <div
        id=${ELEMENTS_ID.buttonsContainer}
        class="pt-[26px] grid grid-cols-4 gap-3 grid-rows-5 px-8 pb-8 col-span-1"
      >
      </div>
    </main>
  </div>
`

const buttonsContainer = document.querySelector<HTMLDivElement>(
  `#${ELEMENTS_ID.buttonsContainer}`
)!
const operation = document.querySelector(
  `#${ELEMENTS_ID.operation}`
) as HTMLDivElement
const resultElement = document.querySelector(
  `#${ELEMENTS_ID.result}`
) as HTMLHeadingElement

rendersButtons(buttonsContainer)

let operationState: any[] = []
console.log(operationState)

function equals() {
  let number = ''
  operationState.map((operationValue) => {
    if (Number(operationValue) >= 0 || Number(operationValue <= 9)) {
      number += operationValue.toLocaleString()
    } else if (operationValue === 'ADDITION') {
      number += '+'
    }
    else if (operationValue === 'SUBTRACTION') {
      number += '-'
    }
  })
  return eval(number)
}

buttonsContainer.addEventListener('click', (event) => {
  const button = event.target as HTMLButtonElement
  const prevState = operation.innerHTML

  // depois passar para funções
  if (Number(button.value) >= 0 || Number(button.value) <= 9) {
    operation.innerHTML = prevState + button.value
    operationState.push(button.value)
  }


  if (
    button.value === 'ADDITION' &&
    !isNaN(operationState[operationState.length - 1])
  ) {
    operation.innerHTML = prevState + ' + '
    operationState.push('ADDITION')
  }
  if (
    button.value === 'SUBTRACTION' &&
    !isNaN(operationState[operationState.length - 1])
  ) {
    operation.innerHTML = prevState + ' - '
    operationState.push('SUBTRACTION')
  }
  if (button.value === 'CLEAR') {
    operation.innerHTML = ''
    operationState = []
  }
  if (button.value === 'EQUAL') {
    const result = equals()
    resultElement.innerHTML = result
  }
})

import { ELEMENTS_ID } from './utils/elements-id'
import { selectElementById } from './utils/select-element-by-id'

let operationState: string[] = []
export function registerOperations(event: MouseEvent) {
  const operationElement = selectElementById(
    ELEMENTS_ID.operation
  ) as HTMLDivElement
  const resultElement = selectElementById(
    ELEMENTS_ID.result
  ) as HTMLHeadingElement

  const button = event.target as HTMLButtonElement
  let prevState = operationElement.innerHTML
  const currentOperationValue = button.textContent!

  console.log(button.dataset.metadata);

  console.log(button);
  
  

  if (Number(button.value) >= 0 || Number(button.value) <= 9) {
    operationElement.innerHTML = prevState + button.value
    operationState.push(button.value)
  }

  if (
    button.value === 'ADDITION' &&
    !isNaN(Number(operationState[operationState.length - 1]))
  ) {
    operationElement.innerHTML = prevState + ' + '
    operationState.push('ADDITION')
  }
  if (
    button.value === 'SUBTRACTION' &&
    !isNaN(Number(operationState[operationState.length - 1]))
  ) {
    operationElement.innerHTML = prevState + ' - '
    operationState.push('SUBTRACTION')
  }

  if (
    button.value === 'MULTIPLICATION' &&
    !isNaN(Number(operationState[operationState.length - 1]))
  ) {
    operationElement.innerHTML = prevState + ' x '
    operationState.push('MULTIPLICATION')
  }

  if (
    button.value === 'DIVISION' &&
    !isNaN(Number(operationState[operationState.length - 1]))
  ) {
    operationElement.innerHTML = prevState + ' ÷ '
    operationState.push('DIVISION')
  }

  if (button.value === 'CANCEL_ENTRY') {
    const originalString = currentOperationValue.trim()
    const processedString = originalString.replace(/\s/g, '').slice(0, -1)
    console.log('processedString', processedString);
    
    const result = processedString
      .replaceAll('+', ' + ')
      .replaceAll('-', ' - ')
      .replaceAll('x', ' x ')
      .replaceAll('÷', ' ÷ ')
      console.log('result', result);
      
    operationElement.innerHTML = result
    operationState.pop()
  }

  if (button.value === 'CLEAR') {
    operationElement.innerHTML = ''
    resultElement.innerHTML = ''
    operationState = []
  }
  if (button.value === 'EQUAL') {
    const result = executeOpetations()
    resultElement.innerHTML = result
  }
}

function executeOpetations() {
  let number = ''
  operationState.map((operationValue) => {
    if (Number(operationValue) >= 0 || Number(operationValue) <= 9) {
      number += operationValue.toLocaleString()
    } else if (operationValue === 'ADDITION') {
      number += '+'
    } else if (operationValue === 'SUBTRACTION') {
      number += '-'
    } else if (operationValue === 'MULTIPLICATION') {
      number += '*'
    } else if (operationValue === 'DIVISION') {
      number += '/'
    }
  })
  return eval(number)
}

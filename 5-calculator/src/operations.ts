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
  const buttonValue = button.getAttribute('value')
  let prevState = operationElement.innerHTML
  const currentOperationValue = operationElement.innerHTML

  if (buttonValue) {
    if (Number(buttonValue) >= 0 || Number(buttonValue) <= 9) {
      operationElement.innerHTML = prevState + buttonValue
      operationState.push(buttonValue)
    }

    if (
      buttonValue === 'ADDITION' &&
      !isNaN(Number(operationState[operationState.length - 1]))
    ) {
      operationElement.innerHTML = prevState + ' + '
      operationState.push('ADDITION')
    }

    if (
      buttonValue === 'SUBTRACTION' &&
      !isNaN(Number(operationState[operationState.length - 1]))
    ) {
      operationElement.innerHTML = prevState + ' - '
      operationState.push('SUBTRACTION')
    }

    if (
      buttonValue === 'MULTIPLICATION' &&
      !isNaN(Number(operationState[operationState.length - 1]))
    ) {
      operationElement.innerHTML = prevState + ' x '
      operationState.push('MULTIPLICATION')
    }

    if (
      buttonValue === 'DIVISION' &&
      !isNaN(Number(operationState[operationState.length - 1]))
    ) {
      operationElement.innerHTML = prevState + ' ÷ '
      operationState.push('DIVISION')
    }

    if (
      buttonValue === 'COMMA' &&
      !isNaN(Number(operationState[operationState.length - 1]))
    ) {
      operationElement.innerHTML = prevState + ','
      operationState.push('COMMA')
    }

    

    if (buttonValue === 'CANCEL_ENTRY') {
      const originalString = currentOperationValue.trim()
      const processedString = originalString.replace(/\s/g, '').slice(0, -1)
      const result = processedString
        .replaceAll('+', ' + ')
        .replaceAll('-', ' - ')
        .replaceAll('x', ' x ')
        .replaceAll('÷', ' ÷ ')
      operationElement.innerHTML = result
      operationState.pop()
    }

    if (buttonValue === 'CLEAR') {
      operationElement.innerHTML = ''
      resultElement.innerHTML = ''
      operationState = []
    }
    if (buttonValue === 'EQUAL') {
      const result = executeOpetations()
      const decimalPointIndex = result.toString().indexOf('.')

      if (decimalPointIndex === -1) {
        resultElement.innerHTML = result
      } else {
        const decimalPlaces = result.toString().length - decimalPointIndex - 1
        if (decimalPlaces > 4) {
          const parseDecimal = result.toFixed(4)
          resultElement.innerHTML = parseDecimal
        } else {
          resultElement.innerHTML = result
        }
      }
    }
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
    } else if (operationValue === 'COMMA') {
      number += '.'
    }
  })
  return eval(number)
}

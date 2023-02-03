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
  const prevState = operationElement.innerHTML
  let currentOperationValue = operationElement.innerHTML

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

    if (
      buttonValue === 'PLUS_MINUS' &&
      !isNaN(Number(operationState[operationState.length - 1]))
    ) {
      let newArrayStrigOfOperationValue = currentOperationValue.split(' ')
      const lastOperationValue = newArrayStrigOfOperationValue.pop()!

      if (lastOperationValue.split('').includes('-')) {
        let operationValueArray = lastOperationValue.split('')

        function removeArrayElement(array: string[], elementToRemove: string) {
          let index = array.indexOf(elementToRemove);
          if (index > -1) {
            array.splice(index, 1);
          }
          return array;
        }

        removeArrayElement(operationValueArray, '-')
        removeArrayElement(operationValueArray, '(')
        removeArrayElement(operationValueArray, ')')
        const parsedValue = operationValueArray.join('')
        newArrayStrigOfOperationValue.push(parsedValue)
      } else {
        newArrayStrigOfOperationValue.push(`(-${lastOperationValue})`)
      }

      const originalString = newArrayStrigOfOperationValue.join().replaceAll(',', '')
      const result = originalString
        .replaceAll('+', ' + ')
        .replaceAll(/(?<!\()-/g, ' - ')
        .replaceAll('x', ' x ')
        .replaceAll('÷', ' ÷ ')
      operationElement.innerHTML = result
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
  console.log('operationState', operationState);
  
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

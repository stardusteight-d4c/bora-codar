import { ELEMENTS_ID } from './utils/elements-id'
import { removeArrayElement } from './utils/remove-array-element'
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
      operationElement.innerHTML = prevState + ' * '
      operationState.push('MULTIPLICATION')
    }

    if (
      buttonValue === 'DIVISION' &&
      !isNaN(Number(operationState[operationState.length - 1]))
    ) {
      operationElement.innerHTML = prevState + ' / '
      operationState.push('DIVISION')
    }

    if (
      buttonValue === 'COMMA' &&
      !isNaN(Number(operationState[operationState.length - 1]))
    ) {
      operationElement.innerHTML = prevState + '.'
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
        removeArrayElement(operationValueArray, '-')
        removeArrayElement(operationValueArray, '(')
        removeArrayElement(operationValueArray, ')')
        const parsedValue = operationValueArray.join('')
        newArrayStrigOfOperationValue.push(parsedValue)
      } else {
        newArrayStrigOfOperationValue.push(`(-${lastOperationValue})`)
      }

      const originalString = newArrayStrigOfOperationValue.join()
      const result = originalString
        .replaceAll('+', ' + ')
        .replaceAll(/(?<!\()-/g, ' - ')
        .replaceAll('x', ' x ')
        .replaceAll('/', ' / ')

      const innerResult = result.replaceAll(/, | ,/g, ' ')
      operationElement.innerHTML = innerResult
    }

    if (buttonValue === 'CANCEL_ENTRY') {
      const originalString = currentOperationValue.trim()
      const processedString = originalString.replace(/\s/g, '').slice(0, -1)
      const result = processedString
        .replaceAll('+', ' + ')
        .replaceAll('-', ' - ')
        .replaceAll('*', ' * ')
        .replaceAll('/', ' / ')
      operationElement.innerHTML = result
      operationState.pop()
    }

    if (buttonValue === 'CLEAR') {
      operationElement.innerHTML = ''
      resultElement.innerHTML = ''
      operationState = []
    }
    if (buttonValue === 'EQUAL') {
      const result = executeOperations(currentOperationValue)

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

function executeOperations(operationString: string) {
  return eval(operationString)
}

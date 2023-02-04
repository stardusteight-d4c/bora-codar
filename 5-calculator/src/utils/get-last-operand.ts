export function getLastOperand(operationString: string) {
  let lastOperand = '';
  let updatedOperationString = '';

  for (let i = operationString.length - 1; i >= 0; i--) {
    if (!isNaN(parseInt(operationString[i]))) {
      lastOperand = operationString[i] + lastOperand;
    } else {
      updatedOperationString = operationString.slice(0, i + 1) + updatedOperationString;
      break;
    }
  }

  return {
    lastOperand: lastOperand,
    updatedOperationString: updatedOperationString
  };
}
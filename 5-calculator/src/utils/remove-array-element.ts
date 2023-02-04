export function removeArrayElement(array: string[], elementToRemove: string) {
  let index = array.indexOf(elementToRemove)
  if (index > -1) {
    array.splice(index, 1)
  }
  return array
}

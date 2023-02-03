export const selectElementById = (id: string) => {
  return document.querySelector(`#${id}`)!
}
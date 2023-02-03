import './style.css'
import { registerOperations } from './operations'
import { buttonsProps, ELEMENTS_ID, selectElementById } from './utils'

function rendersCalculator() {
  document.querySelector<HTMLDivElement>(`#${ELEMENTS_ID.app}`)!.innerHTML = `
    <div class="wrapper">
      <main class="calculator-container">
        <div class="result-screen">
          <div class="operation-container hide-scrollbar">
            <p id=${ELEMENTS_ID.operation} class="operation"></p>
          </div>
          <div class="result-container hide-scrollbar">
            <img src="/src/assets/equals.svg" />
            <h2 id=${ELEMENTS_ID.result} class="result"></h2>
          </div>
        </div>
        <div
          id=${ELEMENTS_ID.buttonsContainer}
          class="buttons-container"
        ></div>
      </main>
    </div>
`

  const buttonsContainerElement = selectElementById(
    ELEMENTS_ID.buttonsContainer
  ) as HTMLDivElement

  function rendersButtons(buttonsContainer: HTMLDivElement) {
    buttonsProps.map((button) => {
      const props = button.props ?? undefined
      const prevState = buttonsContainer.innerHTML
      const newChild = `<button type="button" class="${button.styles} button">${button.content}</button>`
      if (props) {
        const attributes: string[] = []
        Object.entries(props).forEach(([key, value]: any) => {
          attributes.push(`${key}="${value}"`)
        })
        const newChild = `<button type="button" ${attributes
          .toLocaleString()
          .replaceAll(',', '')} class="${button.styles} button">${
          button.content
        }</button>`
        buttonsContainer.innerHTML = prevState + `${newChild}`
      } else {
        buttonsContainer.innerHTML = prevState + `${newChild}`
      }
    })
  }

  rendersButtons(buttonsContainerElement)
}

rendersCalculator()

const buttonsContainerElement = selectElementById(
  ELEMENTS_ID.buttonsContainer
) as HTMLDivElement

buttonsContainerElement.addEventListener('click', (event) =>
  registerOperations(event)
)

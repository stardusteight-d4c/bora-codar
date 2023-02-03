import './style.css'
import { registerOperations } from './operations'
import { buttonsProps, ELEMENTS_ID, selectElementById } from './utils'

function rendersCalculator() {
  document.querySelector<HTMLDivElement>(`#${ELEMENTS_ID.app}`)!.innerHTML = `
    <div class="flex items-center justify-center h-screen overflow-hidden">
      <main class="calculatorContainer">
        <div style="height:136px;" class="flex flex-col pt-[54px] px-[54px] gap-y-2">
          <div class="text-right">
            <p style="height:24px;" id=${ELEMENTS_ID.operation} class"line-clamp-1 !leading-[140%] text-[20px] text-[#6B6B6B]">
            </p>
          </div>
        <div class="flex items-center justify-between">
          <span class="text-[#6B6B6B]">
          <img src="/src/assets/equals.svg" />
          </span>
          <h2 id=${ELEMENTS_ID.result} style="height:50px;" class="text-[36px] !leading-[140%]"></h2>
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

  const buttonsContainerElement = selectElementById(
    ELEMENTS_ID.buttonsContainer
  ) as HTMLDivElement

  function rendersButtons(buttonsContainer: HTMLDivElement) {
    buttonsProps.map((button) => {
      const props = button.props ?? undefined
      const prevState = buttonsContainer.innerHTML
      const newChild = `<button type="button" class="${button.styles} flex items-center justify-center mx-auto col-span-1">${button.content}</button>`
      if (props) {
        const attributes: string[] = []
        Object.entries(props).forEach(([key, value]: any) => {
          attributes.push(`${key}="${value}"`)
        })
        const newChild = `<button type="button" ${attributes
          .toLocaleString()
          .replace(',', '')} class="${button.styles} flex items-center justify-center mx-auto col-span-1">${
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

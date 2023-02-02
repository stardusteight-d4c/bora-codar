import './style.css'
import { buttonsProps } from './utils/buttonsProps'

const ELEMENTS_ID = {
  app: 'app',
  buttonsContainer: 'buttonsContainer',
}

const rendersButtons = (buttonsContainer: HTMLButtonElement) => {
  buttonsProps.map((button) => {
    const prevState = buttonsContainer.innerHTML
    buttonsContainer.innerHTML =
      prevState +
      `<button type="button" class="${button.styles} button col-span-1">${button.content}</button>`
  })
}

document.querySelector<HTMLDivElement>(`#${ELEMENTS_ID.app}`)!.innerHTML = `
  <div class="flex items-center justify-center h-screen overflow-hidden">
    <main class="calculatorContainer">
      <div class="flex flex-col pt-[54px] px-[54px] gap-y-2">
        <div class="operation text-right !leading-[140%] text-[20px] text-[#6B6B6B]">
          1 + 1
        </div>
        <div class="flex items-center justify-between">
          <span class="text-[#6B6B6B]">
            <img src="/src/assets/equals.svg" />
          </span>
          <h2 class="result text-[36px] !leading-[140%]">0</h2>
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
rendersButtons(
  document.querySelector<HTMLButtonElement>(`#${ELEMENTS_ID.buttonsContainer}`)!
)
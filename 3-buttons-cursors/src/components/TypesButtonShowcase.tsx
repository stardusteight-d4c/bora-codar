import {
  Check,
  Plus,
  TextAlignCenter,
  TextAlignLeft,
  TextAlignRight,
  TextBolder,
  TextItalic,
  TextUnderline,
} from 'phosphor-react'

interface Props {}

export const TypesButtonShowcase = (props: Props) => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.containerButton}>
          <button type="button" className={style.buttonContained}>
            Create New
          </button>
          <span className={style.span}>Contained</span>
        </div>

        <div className={style.containerButton}>
          <button type="button" className={style.buttonIconContained}>
            <Plus size={24} weight="bold" />
            Create New
          </button>
          <span className={style.span}>Icon + Contained</span>
        </div>

        <div className={style.containerButton}>
          <button type="button" className={style.buttonGhost}>
            Create New
          </button>
          <span className={style.span}>Outlined/Ghost</span>
        </div>

        <div className={style.containerButton}>
          <button type="button" className={style.buttonText}>
            Create New
          </button>
          <span className={style.span}>Text</span>
        </div>

        <div className={style.containerButton}>
          <button type="button" className={style.buttonIcon}>
            <Plus size={24} weight="bold" />
          </button>
          <span className={style.span}>Icon</span>
        </div>
      </div>

      <div className={style.container}>
        <div className={style.containerButton}>
          <button type="button" className={style.buttonToggle}>
            <TextAlignLeft
              size={45}
              weight="bold"
              className="p-2 text-white bg-[#1EA1F1]"
            />
            <TextAlignCenter
              size={45}
              weight="bold"
              className="p-2 border-x-2 border-[#1EA1F1]"
            />
            <TextAlignRight size={45} weight="bold" className="p-2" />
          </button>
          <span className={style.span}>Toggle</span>
        </div>

        <div className={style.containerButton}>
          <button type="button" className={style.buttonMultiselect}>
            <TextItalic
              size={45}
              weight="bold"
              className="p-2 bg-[#1EA1F1]/20"
            />
            <TextBolder
              size={45}
              weight="bold"
              className="p-2 border-x-2 border-[#1EA1F1]"
            />
            <TextUnderline size={45} weight="bold" className="p-2" />
          </button>
          <span className={style.span}>Multiselect</span>
        </div>

        <div className={style.containerButton}>
          <button type="button" className={style.buttonCheckbox}>
            <Check size={45} weight="bold" className="p-2 bg-[#1EA1F1]" />
          </button>
          <span className={style.span}>Checkbox</span>
        </div>

        <div className={style.containerButton}>
          <button type="button" className={style.buttonFloating}>
            <Plus size={45} weight="bold" className="p-2 bg-[#1EA1F1]" />
          </button>
          <span className={style.span}>Floating action</span>
        </div>
      </div>
    </div>
  )
}

const style = {
  wrapper: `flex gap-x-8 mr-auto my-auto`,
  container: `space-y-8`,
  containerButton: `flex items-center gap-x-3`,
  span: `text-zinc-400 font-medium whitespace-nowrap`,
  buttonContained: `uppercase whitespace-nowrap text-white px-6 py-3 bg-[#1EA1F1] border-2 border-transparent rounded-lg text-sm font-medium text-center`,
  buttonIconContained: `uppercase whitespace-nowrap text-white gap-x-2 px-6 py-3 bg-[#1EA1F1] border-2 border-transparent flex items-center rounded-lg text-sm font-medium text-center`,
  buttonGhost: `uppercase whitespace-nowrap text-[#1EA1F1] px-6 py-3 bg-transparent border-2 border-[#1EA1F1] rounded-lg text-sm font-medium text-center`,
  buttonText: `uppercase whitespace-nowrap text-[#1EA1F1] px-6 py-3 bg-transparent border-2 border-transparent rounded-lg text-sm font-medium text-center`,
  buttonIcon: `uppercase whitespace-nowrap text-[#1EA1F1] px-3 py-3 bg-transparent border-2 border-[#1EA1F1] rounded-lg text-sm font-medium text-center`,
  buttonToggle: `uppercase whitespace-nowrap overflow-hidden text-[#1EA1F1] flex items-center bg-transparent border-2 border-[#1EA1F1] rounded-lg text-sm font-medium text-center`,
  buttonMultiselect: `uppercase whitespace-nowrap overflow-hidden text-[#1EA1F1] flex items-center bg-transparent border-2 border-[#1EA1F1] rounded-lg text-sm font-medium text-center`,
  buttonCheckbox: `uppercase whitespace-nowrap overflow-hidden text-white flex items-center bg-transparent border-1 border-slate-500 rounded-lg text-sm font-medium text-center`,
  buttonFloating: `uppercase whitespace-nowrap overflow-hidden text-white flex items-center bg-transparent border-1 border-slate-500 rounded-full shadow-md text-sm font-medium text-center`,
}

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
import { useState } from 'react'
import { Showcase } from './components/Showcase'

interface Props {}

export const App = (props: Props) => {
  const [openCategoriesOptions, setOpenCategoriesOptions] =
    useState<boolean>(false)
  const [openVariantsOptions, setOpenVariantsOptions] = useState<boolean>(false)

  const showcaseProps = {
    openCategoriesOptions,
    openVariantsOptions,
    setOpenCategoriesOptions,
    setOpenVariantsOptions,
  }

  return (
    <div
      className="grid grid-cols-2 items-center justify-center h-screen"
      onClick={() => {
        setOpenCategoriesOptions(false)
        setOpenVariantsOptions(false)
      }}
    >
      <div className="col-span-1 max-h-[600px] h-full text-white overflow-hidden flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-bold mb-8 mr-auto">States of Button</h1>
        <Showcase {...showcaseProps} />
      </div>

      <div className="col-span-1 max-h-[600px] h-full text-white overflow-hidden flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-bold mb-8 mr-auto">Types of Button</h1>
        <div className="flex gap-x-8 mr-auto my-auto">
          <div className="space-y-8">
            <div className="flex items-center gap-x-3">
              <button
                type="button"
                className="uppercase transition-all duration-300 active:scale-95 text-white px-6 py-3 bg-[#1EA1F1] border-2 border-transparent rounded-lg text-sm font-medium text-center"
              >
                Create New
              </button>
              <span className="text-zinc-400 font-medium">Contained</span>
            </div>

            <div className="flex items-center gap-x-3">
              <button
                type="button"
                className="uppercase text-white gap-x-2 px-6 py-3 bg-[#1EA1F1] border-2 border-transparent flex items-center rounded-lg text-sm font-medium text-center"
              >
                <Plus size={24} className="stroke-[10]" />
                Create New
              </button>
              <span className="text-zinc-400 font-medium">
                Icon + Contained
              </span>
            </div>

            <div className="flex items-center gap-x-3">
              <button
                type="button"
                className="uppercase text-[#1EA1F1] px-6 py-3 bg-transparent border-2 border-[#1EA1F1] rounded-lg text-sm font-medium text-center"
              >
                Create New
              </button>
              <span className="text-zinc-400 font-medium">Outlined/Ghost</span>
            </div>

            <div className="flex items-center gap-x-3">
              <button
                type="button"
                className="uppercase text-[#1EA1F1] px-6 py-3 bg-transparent border-2 border-transparent rounded-lg text-sm font-medium text-center"
              >
                Create New
              </button>
              <span className="text-zinc-400 font-medium">Text</span>
            </div>

            <div className="flex items-center gap-x-3">
              <button
                type="button"
                className="uppercase text-[#1EA1F1] px-3 py-3 bg-transparent border-2 border-[#1EA1F1] rounded-lg text-sm font-medium text-center"
              >
                <Plus size={24} className="stroke-[10]" />
              </button>
              <span className="text-zinc-400 font-medium">Icon</span>
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex items-center gap-x-3">
              <button
                type="button"
                className="uppercase overflow-hidden text-[#1EA1F1] flex items-center bg-transparent border-2 border-[#1EA1F1] rounded-lg text-sm font-medium text-center"
              >
                <TextAlignLeft
                  size={45}
                  className="stroke-[10] p-2 text-white bg-[#1EA1F1]"
                />
                <TextAlignCenter
                  size={45}
                  weight="bold"
                  className="stroke-[10] p-2 border-x-2 border-[#1EA1F1]"
                />
                <TextAlignRight size={45} className="stroke-[10] p-2" />
              </button>
              <span className="text-zinc-400 font-medium">Toggle</span>
            </div>

            <div className="flex items-center gap-x-3">
              <button
                type="button"
                className="uppercase overflow-hidden text-[#1EA1F1] flex items-center bg-transparent border-2 border-[#1EA1F1] rounded-lg text-sm font-medium text-center"
              >
                <TextItalic
                  size={45}
                  className="stroke-[10] p-2 bg-[#1EA1F1]/20"
                />
                <TextBolder
                  size={45}
                  className="stroke-[10] p-2 border-x-2 border-[#1EA1F1]"
                />
                <TextUnderline size={45} className="stroke-[10] p-2" />
              </button>
              <span className="text-zinc-400 font-medium">Multiselect</span>
            </div>

            <div className="flex items-center gap-x-3">
              <button
                type="button"
                className="uppercase overflow-hidden text-white flex items-center bg-transparent border-1 border-slate-500 rounded-lg text-sm font-medium text-center"
              >
                <Check size={45} className="stroke-[10] p-2 bg-[#1EA1F1]" />
              </button>
              <span className="text-zinc-400 font-medium">Checkbox</span>
            </div>

            <div className="flex items-center gap-x-3">
              <button
                type="button"
                className="uppercase overflow-hidden text-white flex items-center bg-transparent border-1 border-slate-500 rounded-full shadow-md text-sm font-medium text-center"
              >
                <Plus size={45} className="stroke-[10] p-2 bg-[#1EA1F1]" />
              </button>
              <span className="text-zinc-400 font-medium">Floating action</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

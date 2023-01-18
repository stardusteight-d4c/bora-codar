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
      <div className="col-span-1 h-screen flex items-center justify-center">
        <Showcase {...showcaseProps} />
      </div>

      <div className="col-span-1 text-white h-screen">
        <h1 className="text-4xl font-bold">Types of Button</h1>

        <div className="flex items-center">
          <button
            type="button"
            className="uppercase text-white  px-6 py-3 bg-[#1EA1F1] border-2 border-transparent rounded-xl text-sm font-medium text-center"
          >
            Create New
          </button>
          Contained
        </div>

        <div className="flex items-center">
          <button
            type="button"
            className="uppercase text-white gap-x-2 px-6 py-3 bg-[#1EA1F1] border-2 border-transparent flex items-center rounded-xl text-sm font-medium text-center"
          >
            <Plus size={24} className="stroke-[10]" />
            Create New
          </button>
          Icon + Contained
        </div>

        <div className="flex items-center">
          <button
            type="button"
            className="uppercase text-[#1EA1F1]  px-6 py-3 bg-transparent border-2 border-[#1EA1F1] rounded-xl text-sm font-medium text-center"
          >
            Create New
          </button>
          Outlined/Ghost
        </div>

        <div className="flex items-center">
          <button
            type="button"
            className="uppercase text-[#1EA1F1]  px-6 py-3 bg-transparent border-2 border-transparent rounded-xl text-sm font-medium text-center"
          >
            Create New
          </button>
          Text
        </div>

        <div className="flex items-center">
          <button
            type="button"
            className="uppercase text-[#1EA1F1] px-3 py-3 bg-transparent border-2 border-[#1EA1F1] rounded-xl text-sm font-medium text-center"
          >
            <Plus size={24} className="stroke-[10]" />
          </button>
          Icon
        </div>

        <div className="flex items-center">
          <button
            type="button"
            className="uppercase overflow-hidden text-[#1EA1F1] flex items-center bg-transparent border-2 border-[#1EA1F1] rounded-xl text-sm font-medium text-center"
          >
            <TextAlignLeft size={45} className="stroke-[10] p-2 text-white bg-[#1EA1F1]" />
            <TextAlignCenter
              size={45}
              className="stroke-[10] p-2 border-x-2 border-[#1EA1F1]"
            />
            <TextAlignRight size={45} className="stroke-[10] p-2" />
          </button>
          Toggle
        </div>

        <div className="flex items-center">
          <button
            type="button"
            className="uppercase overflow-hidden text-[#1EA1F1] flex items-center bg-transparent border-2 border-[#1EA1F1] rounded-xl text-sm font-medium text-center"
          >
            <TextItalic size={45} className="stroke-[10] p-2 bg-[#1EA1F1]/20" />
            <TextBolder
              size={45}
              className="stroke-[10] p-2 border-x-2 border-[#1EA1F1]"
            />
            <TextUnderline size={45} className="stroke-[10] p-2" />
          </button>
          Multiselect
        </div>

        <div className="flex items-center">
          <button
            type="button"
            className="uppercase overflow-hidden text-white flex items-center bg-transparent border-1 border-slate-500 rounded-xl text-sm font-medium text-center"
          >
            <Check size={45} className="stroke-[10] p-2 bg-[#1EA1F1]" />
          </button>
          Checkbox
        </div>

        <div className="flex items-center">
          <button
            type="button"
            className="uppercase overflow-hidden text-white flex items-center bg-transparent border-1 border-slate-500 rounded-full shadow-md text-sm font-medium text-center"
          >
            <Plus size={45} className="stroke-[10] p-2 bg-[#1EA1F1]" />
          </button>
          Floating action
        </div>
      </div>
    </div>
  )
}

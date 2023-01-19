import { CaretDown } from 'phosphor-react'
import React from 'react'

interface Props {
  setOpenOptions: React.Dispatch<React.SetStateAction<any>>
  openOptions: boolean
  value: string
}

export const TriggerOptionsButton = ({
  setOpenOptions,
  openOptions,
  value,
}: Props) => {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation()
        setOpenOptions(!openOptions)
      }}
      className="bg-[#1EA1F1] flex items-center justify-center gap-x-2 border-black/30 border-2 pl-4 py-2 rounded-md cursor-pointer focus:border-white"
    >
      <span className="capitalize font-semibold">{value}</span>
      <CaretDown weight="bold" size={20} className="pr-2" />
    </button>
  )
}

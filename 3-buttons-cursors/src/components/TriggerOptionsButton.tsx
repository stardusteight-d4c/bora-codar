import React from 'react'

interface Props {
  setOpenOptions: React.Dispatch<React.SetStateAction<any>>
  openOptions: boolean
  value: string
}

export const TriggerOptionsButton = ({setOpenOptions, openOptions, value}: Props) => {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation()
        setOpenOptions(!openOptions)
      }}
      className="bg-[#29292e] border-white/50 border-2 px-4 py-2 rounded-md cursor-pointer focus:border-violet-500"
    >
      <span className="capitalize">{value}</span>
    </button>
  )
}

import React from 'react'

interface Props {
  setOption: React.Dispatch<React.SetStateAction<any>>
  setOpenOptions: React.Dispatch<React.SetStateAction<any>>
  options: string[]
}

export const Options = ({ setOption, setOpenOptions, options }: Props) => {
  return (
    <div className="w-auto absolute border border-white/20 bg-[#29292e] flex flex-col overflow-hidden rounded-md">
      {options.map((option) => (
        <span
          onClick={() => {
            setOption(option)
            setOpenOptions(false)
          }}
          className="px-1 capitalize py-[2px] cursor-pointer bg-[#29292e] hover:bg-opacity-50"
        >
          {option}
        </span>
      ))}
    </div>
  )
}

import React from 'react'

interface Props {
  setOption: React.Dispatch<React.SetStateAction<any>>
  setOpenOptions: React.Dispatch<React.SetStateAction<any>>
  options: string[]
}

export const Options = ({ setOption, setOpenOptions, options }: Props) => {
  return (
    <div className={style.wrapper}>
      {options.map((option) => (
        <span
          onClick={() => {
            setOption(option)
            setOpenOptions(false)
          }}
          className={style.span}
        >
          {option}
        </span>
      ))}
    </div>
  )
}

const style = {
  wrapper: `w-auto absolute border border-white/20 bg-[#29292e] flex flex-col overflow-hidden rounded-md`,
  span: `capitalize px-4 py-[2px] cursor-pointer bg-[#29292e] hover:bg-white/10`,
}

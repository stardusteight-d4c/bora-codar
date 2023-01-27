import React from 'react'

interface Props {
  time: string
  message: string
}

export const SenderBubbleChat = ({ time, message }: Props) => {
  return (
    <div className="w-full my-4 flex flex-col items-end">
      <span className="text-[#E1E1E6] mb-[10px]">Você - {time}</span>
      <div className="p-[14px] bg-[#07847E] md:max-w-[50%] break-words rounded-lg rounded-br-none w-fit h-fit">
        {message}
      </div>
    </div>
  )
}

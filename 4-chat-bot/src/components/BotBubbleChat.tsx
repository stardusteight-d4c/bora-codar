import React from 'react'

interface Props {
  time: string
  message: string
}

export const BotBubbleChat = ({ time, message }: Props) => {
  return (
    <div className="w-full my-4 flex flex-col items-start">
      <span className="text-[#E1E1E6] mb-[10px]">Gabriel - {time}</span>
      <div className="p-[14px] bg-[#633BBC] md:max-w-[50%] break-words rounded-lg rounded-tl-none w-fit h-fit">
        {message}
      </div>
    </div>
  )
}

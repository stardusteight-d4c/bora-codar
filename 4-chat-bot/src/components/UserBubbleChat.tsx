import dayjs from 'dayjs'
import { capitalizeFirstLetter } from '../functions/capitalize-first-letter'

interface Props {
  time: string
  message: string
}

export const UserBubbleChat = ({ time, message }: Props) => {
  return (
    <div className="w-full my-4 flex flex-col items-end">
      <span className="text-[#E1E1E6]">
        <span>Você • </span>
        <span className="text-zinc-400">
          {dayjs(time).format('HH')}:{dayjs(time).format('mm')}h
        </span>
      </span>
      <div className="p-[14px] my-[10px] bg-[#07847E] md:max-w-[50%] break-words rounded-lg rounded-br-none w-fit h-fit">
        {message}
      </div>
    </div>
  )
}

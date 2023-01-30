import dayjs from 'dayjs'
import { capitalizeFirstLetter } from '../functions/capitalize-first-letter'

interface Props {
  time: string
  message: string
}

export const BotBubbleChat = ({ time, message }: Props) => {
  function html() {
    return {
      __html: message,
    }
  }

  return (
    <div className="w-full my-4 flex flex-col items-start">
      <span className="text-[#E1E1E6] mb-[10px]">
        <span>BOT#4877 • </span>
        <span className="text-zinc-400">
          {dayjs(time).format('HH')}:{dayjs(time).format('mm')}h
        </span>
      </span>
      <div className="p-[14px] bg-[#633BBC] md:max-w-[50%] break-words rounded-lg rounded-tl-none w-fit h-fit">
        <p dangerouslySetInnerHTML={html()} />
      </div>
    </div>
  )
}

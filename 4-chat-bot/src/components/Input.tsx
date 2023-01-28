import send from '../assets/send.svg'

interface Props {
  setUserMessage:React.Dispatch<React.SetStateAction<string>>
  userMessage: string
  handleKeypress: (e: React.KeyboardEvent<HTMLInputElement>) => void
  sendMessage: () => void
}

export const Input = ({
  setUserMessage,
  userMessage,
  handleKeypress,
  sendMessage,
}: Props) => {
  return (
    <div className="z-10 px-2 md:px-0 bottom-0 w-full h-full max-h-[125px] border-t border-t-zinc-500/50 py-8 bg-[#1A1924]">
      <div className="relative w-full h-fit flex flex-col items-center justify-center">
        <input
          type="text"
          onChange={(e) => setUserMessage(e.target.value)}
          placeholder="Digite sua mensagem"
          value={userMessage}
          onKeyUp={(e) => handleKeypress(e)}
          className="py-5 pl-6 pr-14 bg-[#282843] outline-none w-full placeholder:text-[#E1E1E6] rounded-full"
        />
        <img
          src={send}
          onClick={() => sendMessage()}
          className="absolute right-6 top-1/2 -translate-y-1/2 cursor-pointer hover:scale-105 active:scale-100 transition-all"
        />
      </div>
    </div>
  )
}

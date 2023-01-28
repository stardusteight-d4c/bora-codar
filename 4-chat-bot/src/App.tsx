import { Header } from './components/Header'
import send from './assets/send.svg'
import { ChatContainer } from './components/ChatContainer'
import { useEffect, useState } from 'react'
import { validateName } from './functions/validate-name'

interface Props {}

type Message = {
  message: string
  date: Date
}[]

export interface ChatMessages {
  bot?: Message
  user?: Message
}

const initialMessages = [
  {
    bot: [
      {
        message: 'Olá, aqui é o bot criado pela equipe de desenvolvimento.',
        date: new Date(),
      },
      {
        message: 'Para começar... informe-me o seu nome! 😊',
        date: new Date(),
      },
    ],
  },
]

export const App = (props: Props) => {
  const [userMessage, setUserMessage] = useState<string>('')
  const [stage, setStage] = useState<string>('NAME')
  const [chatMessages, setChatMessages] =
    useState<ChatMessages[]>(initialMessages)

  function confirmName(
    message: string,
    setChatMessages: React.Dispatch<React.SetStateAction<ChatMessages[]>>
  ) {
    if (
      message === 'Sim' ||
      message === 'sim' ||
      message === 's' ||
      message === 'SIM' ||
      message === 'Yes' ||
      message === 'yes' ||
      message === 'y'
    ) {
      if (message === 'yes') {
        setChatMessages((prevState) => [
          ...prevState,
          {
            bot: [
              {
                message: "I don't speak English, but that I understand",
                date: new Date(),
              },
            ],
          },
        ])
      }
    } else {
      setChatMessages((prevState) => [
        ...prevState,
        {
          bot: [
            {
              message: 'Por favor, responda apenas com "Sim" ou "Não".',
              date: new Date(),
            },
          ],
        },
      ])
    }
  }

  function sendMessage() {
    setChatMessages((prevState) => [
      ...prevState,
      {
        user: [
          {
            message: userMessage,
            date: new Date(),
          },
        ],
      },
    ])

    if (stage === 'NAME') {
      validateName(userMessage, setChatMessages, setStage)
    }
    if (stage === 'CONFIRM_NAME') {
      confirmName(userMessage, setChatMessages)
    }
  }

  return (
    <div className="flex items-center justify-center overflow-hidden h-screen w-screen">
      <main className="max-w-7xl flex flex-col h-full 2xl:max-h-[900px] w-full mx-auto">
        <Header />
        <ChatContainer chatMessages={chatMessages} />
        <div className="z-10 px-2 md:px-0 bottom-0 w-full h-full max-h-[125px] border-t border-t-zinc-500/50 py-8 bg-[#1A1924]">
          <div className="relative w-full h-fit flex flex-col items-center justify-center">
            <input
              type="text"
              onChange={(e) => setUserMessage(e.target.value)}
              placeholder="Digite sua mensagem"
              className="py-5 px-6 bg-[#282843] outline-none w-full placeholder:text-[#E1E1E6] rounded-full"
            />
            <img
              src={send}
              onClick={() => sendMessage()}
              className="absolute right-6 top-1/2 -translate-y-1/2 cursor-pointer hover:scale-105 active:scale-100 transition-all"
            />
          </div>
        </div>
      </main>
    </div>
  )
}

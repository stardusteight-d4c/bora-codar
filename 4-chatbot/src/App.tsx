import { Header } from './components/Header'
import { ChatContainer } from './components/ChatContainer'
import { useEffect, useRef, useState } from 'react'
import { validateName } from './functions/validate-name'
import { confirmName } from './functions/confirm-name'
import { chooseTypeMessage } from './functions/choose-type-message'
import { Input } from './components/Input'
import { endStage } from './functions/end-stage'

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
  const [stage, setStage] = useState<string>('STAGE01-NAME')
  const [chatMessages, setChatMessages] =
    useState<ChatMessages[]>(initialMessages)

  const [name, setName] = useState<string>('')
  const [option, setOption] = useState<string>('')
  const [body, setBody] = useState<string>('')

  function clear() {
    setStage('STAGE01-NAME')
    setChatMessages(initialMessages)
    setOption('')
    setBody('')
    setName('')
    setUserMessage('')
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

    if (stage === 'STAGE01-NAME') {
      setName(userMessage.trim())
      validateName(userMessage, setChatMessages, setStage)
    }
    if (stage === 'STAGE02-CONFIRM_NAME') {
      confirmName(userMessage.trim(), name.trim(), setChatMessages, setStage)
    }
    if (stage === 'STAGE03-TYPE_MESSAGE') {
      setOption(userMessage.trim())
      chooseTypeMessage(userMessage, setChatMessages, setOption, setStage)
    }
    if (stage === 'END') {
      endStage(userMessage, setChatMessages, setBody)
    }
    setUserMessage('')
  }

  const handleKeypress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      sendMessage()
    }
  }

  const inputProps = {
    setUserMessage,
    userMessage,
    handleKeypress,
    sendMessage,
  }

  return (
    <div className="flex items-center justify-center overflow-hidden h-screen w-screen">
      <main className="max-w-7xl flex flex-col h-full 2xl:max-h-[900px] w-full mx-auto">
        <Header clear={clear} />
        <ChatContainer chatMessages={chatMessages} />
        <Input {...inputProps} />
      </main>
    </div>
  )
}

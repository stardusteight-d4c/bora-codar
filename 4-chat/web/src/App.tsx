import React from 'react'
import { Header } from './components/Header'
import { RecipientBubbleChat } from './components/RecipientBubbleChat'
import { SenderBubbleChat } from './components/SenderBubbleChat'
import send from './assets/send.svg'


interface Props {}

export const App = (props: Props) => {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <main className="max-w-7xl max-h-[1000px] relative h-full w-full mx-auto">
        <Header />
        <section className="mt-14 w-full">
          <RecipientBubbleChat
            name="Gabriel"
            time="15:23"
            message="Hello, World!"
          />
          <SenderBubbleChat time="15:25" message="E aí!?" />
          <RecipientBubbleChat
            name="Gabriel"
            time="15:43"
            message="Como vai?"
          />
        </section>
        <div className="absolute bottom-0 inset-x-0 my-8">
          <input
            type="text"
            placeholder="Digite sua mensagem"
            className="py-5 px-6 bg-[#282843] outline-none w-full placeholder:text-[#E1E1E6] rounded-full"
          />
        </div>
      </main>
    </div>
  )
}

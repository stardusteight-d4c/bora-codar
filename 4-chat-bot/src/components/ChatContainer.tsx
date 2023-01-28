import React from 'react'
import { BotBubbleChat } from './BotBubbleChat'
import { UserBubbleChat } from './UserBubbleChat'

type Message = {
  message: string
  date: Date
}[]

interface Props {
  chatMessages: {
    bot?: Message
    user?: Message
  }[]
}

export const ChatContainer = ({ chatMessages }: Props) => {
  console.log('chatMessages', chatMessages)

  return (
    <section className="px-2 md:px-0 flex-1 scrollbar-hide scroll-smooth overflow-y-scroll">
      {chatMessages.map((obj) => {
        return (
          <>
            {obj.user?.map((msg) => (
              <UserBubbleChat
                message={msg.message}
                time={msg.date.toISOString()}
              />
            ))}
            {obj.bot?.map((msg) => (
              <BotBubbleChat
                message={msg.message}
                time={msg.date.toISOString()}
              />
            ))}
          </>
        )
      })}
    </section>
  )
}

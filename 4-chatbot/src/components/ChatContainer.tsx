import React, { useEffect, useRef } from 'react'
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
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [chatMessages])

  return (
    <section className="px-2 md:px-0 flex-1 scrollbar-hide scroll-smooth overflow-y-scroll">
      {chatMessages.map((obj, index) => {
        return (
          <div key={index}>
            {obj.user?.map((msg, index) => (
              <UserBubbleChat
                key={index}
                message={msg.message}
                time={msg.date.toISOString()}
              />
            ))}
            {obj.bot?.map((msg, index) => (
              <BotBubbleChat
                key={index}
                message={msg.message}
                time={msg.date.toISOString()}
              />
            ))}
          </div>
        )
      })}
      <div ref={messagesEndRef} />
    </section>
  )
}

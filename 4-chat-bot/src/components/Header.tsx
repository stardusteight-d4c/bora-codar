import React from 'react'
import close from '../assets/close.svg'

interface Props {}

export const Header = (props: Props) => {
  return (
    <header className="w-full px-2 md:px-0 py-4 border-b border-b-zinc-500/50 flex items-center justify-between">
      <div className="flex items-center gap-x-3">
        <img
          src="https://avatars.githubusercontent.com/u/87643260?v=4"
          className="w-14 h-14 rounded-full"
        />
        <div>
          <h1 className="font-bold text-2xl">Gabriel Sena</h1>
          <span className="inline-flex text-[#00B37E] items-center gap-x-1">
            <div className="w-3 h-3 font-medium text-lg bg-[#00B37E] rounded-full" />
            Online
          </span>
        </div>
      </div>
      <div>
        <img
          src={close}
          title="Close"
          alt="close"
          className="w-8 h-8 cursor-pointer hover:brightness-75 transition-all"
        />
      </div>
    </header>
  )
}

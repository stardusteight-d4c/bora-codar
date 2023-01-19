import React, { Children } from 'react'

interface Props {
  title: string
  children: React.ReactNode
}

export const ColSpanContainer = ({ title, children }: Props) => {
  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>{title}</h1>
      {children}
    </div>
  )
}

const style = {
  wrapper: `col-span-1 max-h-[600px] h-full text-white overflow-scroll flex flex-col items-center justify-center p-8`,
  title: `text-4xl font-bold mb-8 mr-auto`,
}

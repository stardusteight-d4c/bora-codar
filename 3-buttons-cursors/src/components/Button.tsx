import React from 'react'
import loading from '../assets/loading.svg'
import reorderThree from '../assets/reorder-three.svg'

interface Props {
  category: ButtonCategories
  variant: ButtonVariants
  type: ButtonTypes
  title: string
}

export const Button = ({
  category = 'default',
  variant = 'primary',
  type,
  title,
}: Props) => {


  return (
    <>
      {/* DEFAULT */}
      {category === 'default' && variant === 'primary' && (
        <button
          type={type}
          className="uppercase px-6 py-3 bg-[#1EA1F1] border-2 border-transparent rounded-3xl text-sm font-medium text-center"
        >
          {title}
        </button>
      )}
      {category === 'default' && variant === 'secondary' && (
        <button
          type={type}
          className="uppercase px-6 py-3 bg-[#1EA1F1]/20 border-2 border-transparent rounded-3xl text-sm font-medium text-center"
        >
          {title}
        </button>
      )}
      {category === 'default' && variant === 'tertiary' && (
        <button
          type={type}
          className="uppercase px-6 py-3 bg-transparent border-2 border-transparent rounded-3xl text-sm font-medium text-center"
        >
          {title}
        </button>
      )}

      {/* HOVER */}
      {category === 'hover' && variant === 'primary' && (
        <button
          type={type}
          className="uppercase px-6 py-3 bg-[#1EA1F1] border-2 border-transparent rounded-3xl text-sm font-medium text-center"
        >
          {title}
        </button>
      )}
      {category === 'hover' && variant === 'secondary' && (
        <button
          type={type}
          className="uppercase px-6 py-3 bg-[#1EA1F1]/20 border-2 border-transparent rounded-3xl text-sm font-medium text-center"
        >
          {title}
        </button>
      )}
      {category === 'hover' && variant === 'tertiary' && (
        <button
          type={type}
          className="uppercase px-6 py-3 bg-transparent border-2 border-transparent rounded-3xl text-sm font-medium text-center brightness-125"
        >
          {title}
        </button>
      )}

      {/* FOCUS */}
      {category === 'focus' && variant === 'primary' && (
        <button
          type={type}
          className="uppercase px-6 py-3 bg-[#1EA1F1] border-2 border-white/80 rounded-3xl text-sm font-medium text-center"
        >
          {title}
        </button>
      )}
      {category === 'focus' && variant === 'secondary' && (
        <button
          type={type}
          className="uppercase px-6 py-3 bg-[#1EA1F1]/20 border-2 border-white/80 rounded-3xl text-sm font-medium text-center"
        >
          {title}
        </button>
      )}
      {category === 'focus' && variant === 'tertiary' && (
        <button
          type={type}
          className="uppercase px-6 py-3 bg-transparent border-2 border-white/80 rounded-3xl text-sm font-medium text-center"
        >
          {title}
        </button>
      )}

      {/* DISABLED */}
      {category === 'disabled' && variant === 'primary' && (
        <button
          type={type}
          className="uppercase px-6 py-3 bg-[#1EA1F1] opacity-[0.56] cursor-not-allowed rounded-3xl text-sm font-medium text-center"
        >
          {title}
        </button>
      )}
      {category === 'disabled' && variant === 'secondary' && (
        <button
          type={type}
          className="uppercase px-6 py-3 bg-[#1EA1F1]/20 opacity-[0.56] cursor-not-allowed rounded-3xl text-sm font-medium text-center"
        >
          {title}
        </button>
      )}
      {category === 'disabled' && variant === 'tertiary' && (
        <button
          type={type}
          className="uppercase px-6 py-3 bg-transparent opacity-[0.56] cursor-not-allowed rounded-3xl text-sm font-medium text-center"
        >
          {title}
        </button>
      )}

      {/* LOADING */}
      {category === 'loading' && variant === 'primary' && (
        <button
          type={type}
          className="uppercase px-6 py-3 inline-flex items-center gap-x-2 bg-[#1EA1F1] rounded-3xl text-sm font-medium text-center cursor-wait"
        >
          <img src={loading} className="w-5 animate-spin pointer-events-none" />
          {title}
        </button>
      )}
      {category === 'loading' && variant === 'secondary' && (
        <button
          type={type}
          className="uppercase px-6 py-3 inline-flex items-center gap-x-2 bg-[#1EA1F1]/20 rounded-3xl text-sm font-medium text-center cursor-wait"
        >
          <img src={loading} className="w-5 animate-spin pointer-events-none" />
          {title}
        </button>
      )}
      {category === 'loading' && variant === 'tertiary' && (
        <button
          type={type}
          className="uppercase px-6 py-3 inline-flex items-center gap-x-2 bg-transparent rounded-3xl text-sm font-medium text-center cursor-wait"
        >
          <img src={loading} className="w-5 animate-spin pointer-events-none" />
          {title}
        </button>
      )}

      {/* MOVABLE */}
      {category === 'movable' && variant === 'primary' && (
        <button
          type={type}
          draggable="true"
          className="uppercase px-6 py-3 inline-flex items-center gap-x-2 bg-[#1EA1F1] rounded-3xl text-sm font-medium text-center cursor-move"
        >
          <img src={reorderThree} className="uppercase pointer-events-none" />
          {title}
        </button>
      )}
      {category === 'movable' && variant === 'secondary' && (
        <button
          type={type}
          draggable="true"
          className="uppercase px-6 py-3 inline-flex items-center gap-x-2 bg-[#1EA1F1]/20 rounded-3xl text-sm font-medium text-center cursor-move"
        >
          <img src={reorderThree} className="uppercase pointer-events-none" />
          {title}
        </button>
      )}
       {category === 'movable' && variant === 'tertiary' && (
        <button
          type={type}
          draggable="true"
          className="uppercase px-6 py-3 inline-flex items-center gap-x-2 bg-transparent rounded-3xl text-sm font-medium text-center cursor-move"
        >
          <img src={reorderThree} className="uppercase pointer-events-none" />
          {title}
        </button>
      )}
    </>
  )
}

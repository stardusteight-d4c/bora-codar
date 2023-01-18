import React from 'react'

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
      {category === 'default' && variant === 'primary' && (
        <button
          type={type}
          className="px-6 py-3 bg-[#8257E5] rounded-3xl text-sm text-center"
        >
          {title}
        </button>
      )}
      {category === 'default' && variant === 'secondary' && (
        <button
          type={type}
          className="px-6 py-3 bg-[#3C3748] rounded-3xl text-sm text-center"
        >
          {title}
        </button>
      )}
       {category === 'default' && variant === 'tertiary' && (
        <button
          type={type}
          className="px-6 py-3 bg-transparent rounded-3xl text-sm text-center"
        >
          {title}
        </button>
      )}
    </>
  )
}

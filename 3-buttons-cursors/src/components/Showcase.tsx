import React, { useState } from 'react'
import { Button } from './Button'
import { Options } from './Options'
import { TriggerOptionsButton } from './TriggerOptionsButton'

interface Props {
  openCategoriesOptions: boolean
  openVariantsOptions: boolean
  setOpenCategoriesOptions: React.Dispatch<React.SetStateAction<boolean>>
  setOpenVariantsOptions: React.Dispatch<React.SetStateAction<boolean>>
}

export const Showcase = ({
  openCategoriesOptions,
  openVariantsOptions,
  setOpenCategoriesOptions,
  setOpenVariantsOptions,
}: Props) => {
  const [category, setCategory] = useState<ButtonCategories>('default')
  const [variant, setVariant] = useState<ButtonVariants>('primary')

  const categories = [
    'default',
    'hover',
    'focus',
    'disabled',
    'loading',
    'movable',
  ]

  const variants = ['primary', 'secondary', 'tertiary']

  return (
    <div className='flex items-center flex-col'>
      <Button
        type="button"
        title={`${category} ${variant}`}
        category={category}
        variant={variant}
      />

      <div className="flex items-center gap-x-4 p-14">
        <div className="ralative flex flex-col items-center space-y-10">
          <TriggerOptionsButton
            setOpenOptions={setOpenCategoriesOptions}
            openOptions={openCategoriesOptions}
            value={category}
          />
          {openCategoriesOptions && (
            <Options
              setOption={setCategory}
              setOpenOptions={setOpenCategoriesOptions}
              options={categories}
            />
          )}
        </div>

        <div className="ralative flex flex-col items-center space-y-10">
          <TriggerOptionsButton
            setOpenOptions={setOpenVariantsOptions}
            openOptions={openVariantsOptions}
            value={variant}
          />
          {openVariantsOptions && (
            <Options
              setOption={setVariant}
              setOpenOptions={setOpenVariantsOptions}
              options={variants}
            />
          )}
        </div>
      </div>
    </div>
  )
}

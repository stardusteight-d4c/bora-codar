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

export const InteractiveButtonShowcase = ({
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
    <div className={style.wrapper}>
      <Button
        type="button"
        title={`${category} ${variant}`}
        category={category}
        variant={variant}
      />

      <div className={style.flexWrapper}>
        <div className={style.flexContainer}>
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

        <div className={style.flexContainer}>
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

const style = {
  wrapper: `flex items-center flex-col my-auto`,
  flexWrapper: `flex items-center gap-x-4 p-14`,
  flexContainer: `ralative max-w-fit flex flex-col items-center space-y-10`,
}

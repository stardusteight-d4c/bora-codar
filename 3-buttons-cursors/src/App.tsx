import { useState } from 'react'
import { ColSpanContainer } from './components/ColSpanContainer'
import { InteractiveButtonShowcase } from './components/InteractiveButtonShowcase'
import { TypesButtonShowcase } from './components/TypesButtonShowcase'

interface Props {}

export const App = (props: Props) => {
  const [openCategoriesOptions, setOpenCategoriesOptions] =
    useState<boolean>(false)
  const [openVariantsOptions, setOpenVariantsOptions] = useState<boolean>(false)

  const interactiveButtonShowcaseProps = {
    openCategoriesOptions,
    openVariantsOptions,
    setOpenCategoriesOptions,
    setOpenVariantsOptions,
  }

  const handleDropdownMenu = () => {
    setOpenCategoriesOptions(false)
    setOpenVariantsOptions(false)
  }

  return (
    <div className={style.wrapper} onClick={() => handleDropdownMenu()}>
      <ColSpanContainer title="States of Button">
        <InteractiveButtonShowcase {...interactiveButtonShowcaseProps} />
      </ColSpanContainer>
      <ColSpanContainer title="Types of Button">
        <TypesButtonShowcase />
      </ColSpanContainer>
    </div>
  )
}

const style = {
  wrapper: `grid grid-cols-2 max-w-[1300px] mx-auto items-center justify-center h-screen`,
}

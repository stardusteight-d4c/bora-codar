import React from 'react'
import loading from '../assets/loading.svg'
import reorderThree from '../assets/reorder-three.svg'
import {
  defaultPrimary,
  defaultSecondary,
  defaultTertiary,
} from './utils/ButtonPatternVerification/default'
import {
  disabledPrimary,
  disabledSecondary,
  disabledTertiary,
} from './utils/ButtonPatternVerification/disabled'
import {
  focusPrimary,
  focusSecondary,
  focusTertiary,
} from './utils/ButtonPatternVerification/focus'
import {
  hoverPrimary,
  hoverSecondary,
  hoverTertiary,
} from './utils/ButtonPatternVerification/hover'
import {
  loadingPrimary,
  loadingSecondary,
  loadingTertiary,
} from './utils/ButtonPatternVerification/loading'
import {
  movablePrimary,
  movableSecondary,
  movableTertiary,
} from './utils/ButtonPatternVerification/movable'

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
  const RendersDefault = () => (
    <>
      {defaultPrimary(category, variant) && (
        <button type={type} className={style.default.primary}>
          {title}
        </button>
      )}
      {defaultSecondary(category, variant) && (
        <button type={type} className={style.default.secondary}>
          {title}
        </button>
      )}
      {defaultTertiary(category, variant) && (
        <button type={type} className={style.default.tertiary}>
          {title}
        </button>
      )}
    </>
  )

  const RendersHover = () => (
    <>
      {hoverPrimary(category, variant) && (
        <button type={type} className={style.hover.primary}>
          {title}
        </button>
      )}
      {hoverSecondary(category, variant) && (
        <button type={type} className={style.hover.secondary}>
          {title}
        </button>
      )}
      {hoverTertiary(category, variant) && (
        <button type={type} className={style.hover.tertiary}>
          {title}
        </button>
      )}
    </>
  )

  const RendersFocus = () => (
    <>
      {focusPrimary(category, variant) && (
        <button type={type} className={style.focus.primary}>
          {title}
        </button>
      )}
      {focusSecondary(category, variant) && (
        <button type={type} className={style.focus.secondary}>
          {title}
        </button>
      )}
      {focusTertiary(category, variant) && (
        <button type={type} className={style.focus.tertiary}>
          {title}
        </button>
      )}
    </>
  )

  const rendersDisable = () => (
    <>
      {disabledPrimary(category, variant) && (
        <button type={type} className={style.disabled.primary}>
          {title}
        </button>
      )}
      {disabledSecondary(category, variant) && (
        <button type={type} className={style.disabled.secondary}>
          {title}
        </button>
      )}
      {disabledTertiary(category, variant) && (
        <button type={type} className={style.disabled.tertiary}>
          {title}
        </button>
      )}
    </>
  )

  const rendersLoading = () => (
    <>
      {loadingPrimary(category, variant) && (
        <button type={type} className={style.loading.primary}>
          <img src={loading} className={style.loading.icon} />
          {title}
        </button>
      )}
      {loadingSecondary(category, variant) && (
        <button type={type} className={style.loading.secondary}>
          <img src={loading} className={style.loading.icon} />
          {title}
        </button>
      )}
      {loadingTertiary(category, variant) && (
        <button type={type} className={style.loading.tertiary}>
          <img src={loading} className={style.loading.icon} />
          {title}
        </button>
      )}
    </>
  )

  const rendersMovable = () => (
    <>
      {movablePrimary(category, variant) && (
        <button type={type} draggable="true" className={style.movable.primary}>
          <img src={reorderThree} className={style.movable.icon} />
          {title}
        </button>
      )}
      {movableSecondary(category, variant) && (
        <button
          type={type}
          draggable="true"
          className={style.movable.secondary}
        >
          <img src={reorderThree} className={style.movable.icon} />
          {title}
        </button>
      )}
      {movableTertiary(category, variant) && (
        <button type={type} draggable="true" className={style.movable.tertiary}>
          <img src={reorderThree} className={style.movable.icon} />
          {title}
        </button>
      )}
    </>
  )

  return (
    <>
      {/* as Component */}
      <RendersDefault />
      <RendersHover />
      <RendersFocus />

      {/* as Function Call */}
      {rendersDisable()}
      {rendersLoading()}
      {rendersMovable()}
    </>
  )
}

const style = {
  default: {
    primary: `baseButton bg-[#1EA1F1] border-transparent`,
    secondary: `baseButton bg-[#1EA1F1]/20 border-transparent`,
    tertiary: `baseButton bg-transparent border-transparent`,
  },
  hover: {
    primary: `baseButton bg-[#1EA1F1] brightness-125 border-transparent`,
    secondary: `baseButton bg-[#1EA1F1]/20 brightness-125 border-transparent`,
    tertiary: `baseButton bg-transparent border-transparent brightness-125`,
  },
  focus: {
    primary: `baseButton bg-[#1EA1F1] border-white/80`,
    secondary: `baseButton bg-[#1EA1F1]/20 border-white/80`,
    tertiary: `baseButton bg-transparent border-white/80`,
  },
  disabled: {
    primary: `baseButton bg-[#1EA1F1] opacity-[0.56] cursor-not-allowed`,
    secondary: `baseButton bg-[#1EA1F1]/20 opacity-[0.56] cursor-not-allowed`,
    tertiary: `baseButton bg-transparent opacity-[0.56] cursor-not-allowed`,
  },
  loading: {
    icon: `w-5 animate-spin pointer-events-none`,
    primary: `baseButton border-transparent inline-flex items-center gap-x-2 bg-[#1EA1F1] cursor-wait`,
    secondary: `baseButton border-transparent inline-flex items-center gap-x-2 bg-[#1EA1F1]/20 cursor-wait`,
    tertiary: `baseButton border-transparent inline-flex items-center gap-x-2 bg-transparent cursor-wait`,
  },
  movable: {
    icon: `uppercase pointer-events-none`,
    primary: `baseButton border-transparent inline-flex items-center gap-x-2 bg-[#1EA1F1] cursor-move`,
    secondary: `baseButton border-transparent inline-flex items-center gap-x-2 bg-[#1EA1F1]/20 cursor-move`,
    tertiary: `baseButton border-transparent inline-flex items-center gap-x-2 bg-transparent cursor-move`,
  },
}

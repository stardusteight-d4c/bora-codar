export const disabledPrimary = (category: string, variant: string) => {
  return category === 'disabled' && variant === 'primary'
}

export const disabledSecondary = (category: string, variant: string) => {
  return category === 'disabled' && variant === 'secondary'
}

export const disabledTertiary = (category: string, variant: string) => {
  return category === 'disabled' && variant === 'tertiary'
}

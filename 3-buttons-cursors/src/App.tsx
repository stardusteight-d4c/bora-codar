import React from 'react'
import { Button } from './components/Button'

interface Props {}

export const App = (props: Props) => {
  return (
    <div>
      <Button
        type="button"
        category="default"
        variant="primary"
        title="DEFAULT PRIMARY"
      />
      <Button
        type="button"
        category="default"
        variant="secondary"
        title="DEFAULT SECONDARY"
      />
           <Button
        type="button"
        category="default"
        variant="tertiary"
        title="DEFAULT TERTIARY"
      />
    </div>
  )
}

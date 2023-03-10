import styled from 'styled-components'
import { Suspense, useState } from 'react'
import { InteractiveScene } from './InteractiveScene'
import { StaticScene } from './StaticScene'

import icon360 from '../assets/icon360.svg'
import closeIcon from '../assets/closeIcon.svg'

interface Props {
  pathScene: string
  interactive360Mode: boolean
  setInteractive360Mode: React.Dispatch<React.SetStateAction<boolean>>
}

export function Showcase({
  pathScene,
  interactive360Mode,
  setInteractive360Mode,
}: Props) {
  return (
    <ProductShowcase>
      <div>
        {interactive360Mode ? (
          <img
            onClick={() => setInteractive360Mode(!interactive360Mode)}
            src={closeIcon}
            className="closeIcon"
          />
        ) : (
          <img
            onClick={() => setInteractive360Mode(!interactive360Mode)}
            src={icon360}
            className="icon360"
          />
        )}
        <div className="model360DContainer">
          {interactive360Mode ? (
            <Suspense fallback={'Loading...'}>
              <InteractiveScene pathScene={pathScene} />
            </Suspense>
          ) : (
            <Suspense fallback={'Loading...'}>
              <StaticScene pathScene={pathScene} />
            </Suspense>
          )}
        </div>
      </div>
    </ProductShowcase>
  )
}
const ProductShowcase = styled.section`
  margin-right: 0px;
  display: flex;
  justify-items: center;
  justify-content: end;
  div {
    margin-block: auto;
    position: relative;
    .icon360 {
      position: absolute;
      right: 35px;
      top: 120px;
      z-index: 10;
      width: 45px;
      padding: 2px;
      cursor: pointer;
    }
    .closeIcon {
      position: absolute;
      right: 43px;
      top: 120px;
      z-index: 10;
      width: 28px;
      padding: 2px;
      cursor: pointer;
    }
    .model360DContainer {
      margin-top: 80px;
    }
  }
`

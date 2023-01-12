import styled from 'styled-components'
import Icon360 from '../assets/icon360.svg'
import React, { Suspense, useState } from 'react'
import { Scene } from './Scene'
import { StaticScene } from './StaticScene'

export function Showcase() {
  const [show360model, setShow360model] = useState<boolean>(false)
  const [enableOrbitControls, setEnableOrbitControls] = useState<boolean>(false)

  return (
    <ProductShowcase>
      <div>
        <img
          onClick={() => {
            setShow360model(!show360model)
          }}
          src={Icon360}
          className="icon360"
        />
        {!show360model ? (
          <Suspense fallback={'...'}>
            <Scene />
          </Suspense>
        ) : (
          <Suspense fallback={'...'}>
            <StaticScene />
          </Suspense>
        )}
      </div>
    </ProductShowcase>
  )
}
const ProductShowcase = styled.section`
  display: flex;
  justify-items: center;
  justify-content: end;
  div {
    margin-block: auto;
    position: relative;
    .icon360 {
      position: absolute;
      right: -35px;
      top: -50px;
      width: 45px;
      padding: 2px;
      cursor: pointer;
      :hover {
        transform: scale(1.2);
        transition: transform 0.5s ease-out;
      }
    }
  }
`

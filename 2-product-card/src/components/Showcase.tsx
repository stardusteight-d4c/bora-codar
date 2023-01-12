import styled from 'styled-components'
import Icon360 from '../assets/icon360.svg'
import React, { Suspense, useState } from 'react'
import { InteractiveScene } from './InteractiveScene'
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
        <div className='model360DContainer'>
          {!show360model ? (
            <Suspense fallback={'...'}>
              <InteractiveScene />
            </Suspense>
          ) : (
            <Suspense fallback={'...'}>
              <StaticScene />
            </Suspense>
          )}
        </div>
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
      top: 0px;
      width: 45px;
      padding: 2px;
      cursor: pointer;
      :hover {
        transform: scale(1.2);
        transition: transform 0.5s ease-out;
      }
    }
    .model360DContainer {
      margin-top: 80px;
    }
  }
`

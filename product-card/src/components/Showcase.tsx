import styled from 'styled-components'
import SofaMargot from '../assets/margot-2-seater-sofa-old-rose-velvet.png'
import Icon360 from '../assets/icon360.svg'
import React, { Suspense, useState } from 'react'
import { Scene } from './Scene'

export function Showcase() {
  const [show3Dmodel, setShow3Dmodel] = useState<boolean>(false)

  return (
    <ProductShowcase>
      <div>
        <img
          onClick={() => setShow3Dmodel(!show3Dmodel)}
          src={Icon360}
          className="icon360"
        />
        {show3Dmodel ? (
          <Suspense fallback={'...'}>
            <Scene />
          </Suspense>
        ) : (
          <div>
            <img src={SofaMargot} className="sofaMargotStatic" />
          </div>
        )}
      </div>
    </ProductShowcase>
  )
}
const ProductShowcase = styled.section`
  width: 100%;
  display: flex;
  justify-items: center;
  justify-content: end;
  div {
    height: fit-content;
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
    .sofaMargot3D {
      /* width: 400px;
      height: 220px; */
      // aumentar o tamabnho pelo próprio embed na page
      /* width: '449px', height: '253px' */
    }
    .sofaMargotStatic {
      width: 400px;
      height: 220px;
    }
  }
`

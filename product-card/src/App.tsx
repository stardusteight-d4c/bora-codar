import styled from 'styled-components'
import { Showcase } from './components/Showcase'
import { Info } from './components/Info'
import { Suspense } from 'react'
import { Scene } from './components/Scene'

export function App() {
  return (
    <Wrapper>
      <Main>
        <Showcase />
        <Info />
      </Main>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-items: center;
  justify-content: center;
`

const Main = styled.div`
  display: grid;
  width: 100vw;
  /* height: 100vh; */
  column-gap: 150px;
  height: 60vh;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  section {
    grid-column: span 1 / span 1;
  }
`

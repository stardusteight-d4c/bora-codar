import styled from 'styled-components'
import { Showcase } from './components/Showcase'
import { Info } from './components/Info'
import { useState } from 'react'

// Colocar as informações do produto em um array de objetos, e o path do GLTFLoader tbm,
// fazer paginação no app e mudar o index do array ques está sendo passado, iniciando em 0

export function App() {
  const [products, setProducts] = useState<Product[]>()

  fetch('./fakeApiProducts/products.json')
    .then((res) => res.json())
    .then((data) => setProducts(data))

  if (!products) {
    return <>Loading...</>
  }

  return (
    <Wrapper>
      <Main>
        <Showcase pathScene={products[0].pathScene} />
        <Info product={products[0]} />
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
  height: 100vh;
  column-gap: 30px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  section {
    grid-column: span 1 / span 1;
  }
`

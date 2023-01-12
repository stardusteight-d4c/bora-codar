import styled from 'styled-components'
import { Showcase } from './components/Showcase'
import { Info } from './components/Info'
import { useState } from 'react'

export function App() {
  const [products, setProducts] = useState<Product[]>()
  const [activeProduct, setActiveProduct] = useState<number>(0)

  fetch('./fakeApiProducts/products.json')
    .then((res) => res.json())
    .then((data) => setProducts(data))

  if (!products) {
    return <>Loading...</>
  }

  const dotProps = (index: number, activeItem: boolean) => {
    return {
      onClick: () => setActiveProduct(index),
      style: activeItem
        ? { backgroundColor: '#FFFFFF' }
        : { backgroundColor: '#00000050' },
    }
  }

  return (
    <Wrapper>
      <Main>
        <Showcase
          pathScene={products[activeProduct].pathScene}
          zoom={products[activeProduct]?.zoom}
        />
        <Info product={products[activeProduct]} />
        <Dots>
          <div {...dotProps(0, activeProduct === 0)} />
          <div {...dotProps(1, activeProduct === 1)} />
          <div {...dotProps(2, activeProduct === 2)} />
        </Dots>
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
  height: fit-content;
  column-gap: 30px;
  position: relative;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  section {
    grid-column: span 1 / span 1;
  }
`
const Dots = styled.div`
  position: absolute;
  bottom: 180px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  column-gap: 10px;
  div {
    border-radius: 9999px;
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
`

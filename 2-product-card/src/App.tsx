import styled from 'styled-components'
import { Showcase } from './components/Showcase'
import { Info } from './components/Info'
import { useEffect, useState } from 'react'

export function App() {
  const [products, setProducts] = useState<Product[]>()
  const [activeProduct, setActiveProduct] = useState<number>(0)
  const [interactive360Mode, setInteractive360Mode] = useState<boolean>(false)
  const [bgColor, setBgColor] = useState<string>('#c2aef3')

  useEffect(() => {
    ;(async () => {
      await fetch('./fakeApiProducts/products.json')
        .then((res) => res.json())
        .then((data) => setProducts(data))
    })()
  }, [])

  if (!products) {
    return <>Loading...</>
  }

  const dotProps = (index: number, color: string, activeItem: boolean) => {
    return {
      onClick: () => {
        setActiveProduct(index)
        setInteractive360Mode(false)
        setBgColor(color)
      },
      style: activeItem
        ? { backgroundColor: '#FFFFFF' }
        : { backgroundColor: '#00000050' },
    }
  }

  const mainProps = {
    showCase: {
      pathScene: products[activeProduct].pathScene,
      interactive360Mode: interactive360Mode,
      setInteractive360Mode: setInteractive360Mode,
    },
    info: {
      product: products[activeProduct],
    },
  }

  return (
    <Wrapper bgColor={bgColor}>
      <Main>
        <Showcase {...mainProps.showCase} />
        <Info {...mainProps.info} />
        <Dots>
          {products.map((_, index) => {
            const color = ['#dec1ba', '#c8b49e']
            return (
              <div
                {...dotProps(index, color[index], activeProduct === index)}
                key={index}
              />
            )
          })}
        </Dots>
      </Main>
    </Wrapper>
  )
}

interface StyledProps {
  bgColor: string
}

const Wrapper = styled.div<StyledProps>`
  display: flex;
  width: 100vw;
  background-color: ${(props) => props.bgColor};
  height: 100vh;
  justify-items: center;
  justify-content: center;
`
const Main = styled.main`
  display: grid;
  width: 100vw;
  max-height: fit-content;
  margin-block: auto;
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

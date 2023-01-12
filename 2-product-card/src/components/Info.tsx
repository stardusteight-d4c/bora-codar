import styled from 'styled-components'

interface Props {
  product: Product
}

export function Info({ product }: Props) {
  return (
    <ProductInfo>
      <div>
        <span className="code">Código: {product.code}</span>
        <h1 className="title">{product.name}</h1>
        <span className="price">R$ {product.price}</span>
        <button type="button" className="button">
          Adicionar à cesta
        </button>
      </div>
    </ProductInfo>
  )
}

const ProductInfo = styled.section`
  width: 100%;
  display: flex;
  justify-items: center;
  justify-content: start;
  margin-top: -75px;
  div {
    height: fit-content;
    margin-block: auto;
  }
  .code {
    font-family: 'Lato', sans-serif;
    font-weight: 300;
    font-size: 0.825rem;
    color: #271a45;
    text-transform: uppercase;
  }
  .title {
    font-family: 'Crimson Pro', serif;
    font-weight: 600;
    font-size: 2.8rem;
    width: 400px;
    margin-block: 12px;
    color: #271a45;
  }
  .price {
    font-weight: 400;
    font-size: 1.3rem;
    color: #271a45;
    opacity: 0.9;
    display: inline-block;
    margin-bottom: 25px;
  }
  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    gap: 8px;
    border: 0.5px solid #271a45;
    border-radius: 9999px;
    background-color: transparent;
    text-transform: uppercase;
    font-family: 'Lato', sans-serif;
    color: #271a45;
    cursor: pointer;
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 400ms;
    :hover {
      transform: scale(1.1);
    }
  }
`

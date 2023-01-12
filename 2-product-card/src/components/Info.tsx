import styled from 'styled-components'

export function Info() {
  return (
    <ProductInfo>
      <div>
        <span className="code">Código: 42404</span>
        <h1 className="title">Sofá Margot II - Rosé</h1>
        <span className="price">R$ 4.000</span>
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
  div {
    height: fit-content;
    margin-block: auto;
  }
  .code {
    font-family: 'Lato', sans-serif;
    font-weight: 300;
    font-size: 0.625rem;
    color: #271a45;
    text-transform: uppercase;
  }
  .title {
    font-family: 'Crimson Pro', serif;
    font-weight: 600;
    font-size: 2.5rem;
    margin-block: 12px;
    color: #271a45;
  }
  .price {
    font-weight: 400;
    font-size: 1rem;
    color: #271a45;
    display: inline-block;
    margin-bottom: 28px;
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
  }
`

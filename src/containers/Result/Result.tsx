import React from 'react'
import { Container, TextContainer, Result as ResultElement } from './style'

const Result = () => {
  return (
    <Container>
      <div>
        <TextContainer>
          <p className='mainText'>Tip Amount</p>
          <p className='secondaryText'>/ person</p>
        </TextContainer>
        <ResultElement>$0.00</ResultElement>
      </div>
      <div>
        <TextContainer>
          <p className='mainText'>Total</p>
          <p className='secondaryText'>/ person</p>
        </TextContainer>
        <ResultElement>$0.00</ResultElement>
      </div>
      <button>RESET</button>
    </Container>
  )
}

export default Result
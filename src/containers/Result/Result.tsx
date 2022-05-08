import React from 'react'
import { Container, TextContainer, Result as ResultElement } from './style'

interface Props { tipsPerPerson: number, totalPerPerson: number, onReset: () => void };

const Result = ({ tipsPerPerson, totalPerPerson, onReset }: Props): JSX.Element => {
  return (
    <Container>
      <div>
        <TextContainer>
          <p className='mainText'>Tip Amount</p>
          <p className='secondaryText'>/ person</p>
        </TextContainer>
        <ResultElement>${tipsPerPerson.toFixed(2)}</ResultElement>
      </div>
      <div>
        <TextContainer>
          <p className='mainText'>Total</p>
          <p className='secondaryText'>/ person</p>
        </TextContainer>
        <ResultElement>${totalPerPerson.toFixed(2)}</ResultElement>
      </div>
      <button onClick={onReset}>RESET</button>
    </Container >
  )
}

export default Result
import React from 'react'
import BillOptions from '../BillOptions/BillOptions'
import { Container } from './styles'

const Calculator = () => {
  return (
    <Container>
      <BillOptions />
      <div style={{ border: '1px solid red', flexGrow: 1 }
      } > Matheus</div>
    </Container >
  )
}

export default Calculator
import React from 'react'
import BillOptions from '../BillOptions/BillOptions'
import Result from '../Result/Result'
import { Container } from './styles'

const Calculator = () => {
  return (
    <Container>
      <BillOptions />
      <Result />
    </Container >
  )
}

export default Calculator
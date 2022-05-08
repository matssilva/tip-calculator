import React, { useState } from 'react'
import BillOptions from '../BillOptions/BillOptions'
import Result from '../Result/Result'
import { Container } from './styles'

export interface State {
  bill: number | null;
  tip: number | null;
  people: number;
  tipIsInput: boolean;
}

const Calculator = () => {
  const [state, setState] = useState<State>({
    bill: null,
    tip: null,
    people: 1,
    tipIsInput: false
  });

  const onReset = () => {
    setState({
      bill: null,
      tip: null,
      people: 1,
      tipIsInput: false
    })
  }

  const calculateTipsPerPerson = () => {
    if (state.bill && state.tip && state.people) {
      return (state.bill * (state.tip / 100)) / state.people;
    }
    return 0
  }

  const calculateTotalPerPerson = (tipsPerPerson: number) => {
    if (state.bill && state.people) {
      return state.bill / state.people + tipsPerPerson;
    }
    return 0
  }

  const tipsPerPerson = calculateTipsPerPerson();
  const totalPerPerson = calculateTotalPerPerson(tipsPerPerson)

  return (
    <Container>
      <BillOptions setState={setState} state={state} />
      <Result totalPerPerson={totalPerPerson} tipsPerPerson={tipsPerPerson} onReset={onReset} />
    </Container >
  )
}

export default Calculator
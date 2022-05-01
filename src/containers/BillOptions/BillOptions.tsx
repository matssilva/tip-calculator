import React from 'react'
import CustomInput from '../../components/CustomInput/CustomInput'
import { Container, TipsContainer } from './style';
import IconDollar from '../../assets/icon-dollar.svg';
import IconPerson from '../../assets/icon-person.svg';
import { Label } from '../../shared/styles';
import Tip from '../../components/Tip/Tip';

const tips: Array<number> = [
  5, 10, 15, 25, 50
]

const BillOptions = () => {
  return (
    <Container>
      <CustomInput name='bill' text='Bill' icon={IconDollar} />
      <Label>Select Tip %</Label>
      <TipsContainer>
        {tips.map((tip, i) => <Tip value={tip} key={i} />)}
      </TipsContainer>
      <CustomInput name='numberOfPeople' text='Number of People' icon={IconPerson} />
    </Container>
  )
}

export default BillOptions
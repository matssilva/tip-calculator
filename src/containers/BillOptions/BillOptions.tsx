import React, { Dispatch, SetStateAction } from 'react'
import CustomInput from '../../components/CustomInput/CustomInput'
import { Container, InputTip, TipsContainer } from './style';
import IconDollar from '../../assets/icon-dollar.svg';
import IconPerson from '../../assets/icon-person.svg';
import { Label } from '../../shared/styles';
import Tip from '../../components/Tip/Tip';
import { State } from '../Calculator/Calculator';

const tips: Array<number> = [
  5, 10, 15, 25, 50
]
interface Props {
  setState: Dispatch<SetStateAction<any>>
  state: State;
}

const BillOptions = ({ state, setState }: Props) => {
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value ? parseFloat(e.target.value) : null;
    setState({ ...state, [e.target.name]: value });
  }

  const onTipInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value ? parseFloat(e.target.value) : null;
    setState({ ...state, [e.target.name]: value, tipIsInput: true });
  }

  const onTipClick = (value: number) => {
    setState({ ...state, tip: value, tipIsInput: false });
  }

  return (
    <Container>
      <CustomInput
        name='bill'
        text='Bill'
        icon={IconDollar}
        onInputchange={onInputChange}
        value={state.bill}
        error={state.bill <= 0 && state.bill !== null ? "Can't be zero or less" : null}
      />
      <div>
        <Label>Select Tip %</Label>
        <TipsContainer>
          {tips.map((tip, i) => <Tip tip={tip} isActive={state.tip === tip} key={i} onTipClick={onTipClick} tipIsInput={state.tipIsInput} />)}
          <InputTip type="number" value={state.tipIsInput && state.tip ? state.tip : ''} placeholder="CUSTOM" name="tip" onChange={onTipInputChange} />
        </TipsContainer>
      </div>
      <CustomInput
        name='people'
        text='Number of People'
        icon={IconPerson}
        value={state.people}
        onInputchange={onInputChange}
        error={state.people <= 0 && state.people !== null ? "Can't be zero or less" : null}
      />
    </Container>
  )
}

export default BillOptions
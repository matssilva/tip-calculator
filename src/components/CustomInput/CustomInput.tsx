import React from 'react'
import { Label } from '../../shared/styles';
import { Input, InputContainer } from './style'

interface Props {
  name: string;
  text: string;
  icon: any;
}

const CustomInput = ({ name, text, icon }: Props): JSX.Element => {
  return (
    <InputContainer>
      <Label htmlFor={name}>{text}</Label>
      <Input id={name} type="number" icon={icon} />
    </InputContainer>
  )
}

export default CustomInput
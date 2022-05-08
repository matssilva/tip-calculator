import React from 'react'
import { Label } from '../../shared/styles';
import { Input, InputContainer } from './style'

interface Props {
  name: string;
  text: string;
  icon: any;
  onInputchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: number;
  error: string | null;
}

const CustomInput = ({ name, text, icon, value, onInputchange, error }: Props): JSX.Element => {
  return (
    <InputContainer>
      <div>
        <Label htmlFor={name}>{text}</Label>
        {error && <Label htmlFor='' error={error}>{error}</Label>}
      </div>
      <Input id={name} name={name} type="number" icon={icon} value={value === null ? '' : value} onChange={onInputchange} error={error} />
    </InputContainer>
  )
}

export default CustomInput
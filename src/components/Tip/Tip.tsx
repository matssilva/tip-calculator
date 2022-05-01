import React from 'react'
import { TipElement } from './style';

interface Props {
  value: number;
}

const Tip = ({ value }: Props) => {
  return (
    <TipElement>{value}%</TipElement>
  )
}

export default Tip
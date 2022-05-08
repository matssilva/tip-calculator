import React from 'react'
import { TipElement } from './style';

interface Props {
  tip: number;
  onTipClick: (value: number) => void;
  isActive: boolean;
  tipIsInput: boolean;
}

const Tip = ({ tip, onTipClick, isActive, tipIsInput }: Props) => {
  return (
    <TipElement onClick={() => onTipClick(tip)} isActive={isActive && !tipIsInput}>{tip}%</TipElement>
  )
}

export default Tip
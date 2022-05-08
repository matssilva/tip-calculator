import styled from "styled-components";

export const TipElement = styled.div<{ isActive: boolean }>`
  background-color: ${({ theme, isActive }) => isActive ? theme.primaryColor : theme.veryDarkGreen};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  border-radius: 4px;
  cursor: pointer;
  color: ${({ theme, isActive }) => isActive ? theme.veryDarkGreen : theme.white};
  padding: 5px;
  
  &:hover {
    background-color: ${({ theme }) => theme.primaryColor};
    color: ${({ theme }) => theme.veryDarkGreen};
  }
`;
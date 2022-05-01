import styled from "styled-components";

export const TipElement = styled.div`
  background-color: ${({ theme }) => theme.veryDarkGreen};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  border-radius: 4px;
  cursor: pointer;
  color: ${({ theme }) => theme.white};

  &:hover {
    background-color: ${({ theme }) => theme.primaryColor};
    color: ${({ theme }) => theme.veryDarkGreen};
  }
`;
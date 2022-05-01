import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input<{ icon: any }>`
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.veryLightGreen};
  text-align: right;
  padding: 5px;
  font-size: 24px;
  color: ${({ theme }) => theme.veryDarkGreen};
  font-family: ${({ theme }) => theme.fontFamily};
  background-position: 17px 15px;
  background-repeat: no-repeat;
  background-image: ${(props) => `url(${props.icon})`}
  `
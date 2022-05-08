import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Input = styled.input<{ icon: any, error: string | null }>`
  border: ${({ error }) => error ? '2px solid red' : 'none'};
  outline: none;
  background-color: ${({ theme }) => theme.veryLightGreen};
  text-align: right;
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 24px;
  color: ${({ theme }) => theme.veryDarkGreen};
  font-family: ${({ theme }) => theme.fontFamily};
  background-position: 17px 15px;
  background-repeat: no-repeat;
  background-image: ${(props) => `url(${props.icon})`};

  ::-webkit-input-placeholder {
   text-align: center;
}
  ::-webkit-inner-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }
    ::-webkit-outer-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }
  
`
import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: space-between;
`

export const TipsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 15px;
  column-gap: 17px;
  margin-top: 15px;
`

export const InputTip = styled.input`
  width: 100%;
  border-radius: 4px;
  text-align: right;
  font-size: 24px;
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.veryLightGreen};
  color: ${({ theme }) => theme.veryDarkGreen};
  font-family: ${({ theme }) => theme.fontFamily};
  padding: 5px;
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

`;
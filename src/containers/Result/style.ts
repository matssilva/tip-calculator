import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({ theme }) => theme.veryDarkGreen};
    border-radius: 10px;
    flex-grow: 1;
    padding: 40px 30px;
    display: flex;
    flex-direction: column;

    & > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    & > button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      border-radius: 5px;
      background-color: ${({ theme }) => theme.primaryColor};
      color: ${({ theme }) => theme.veryDarkGreen};
      border: none;
      padding: 13px 0 13px 0;
      font-size: 20px;
      font-weight: 700;
      margin-top: auto;
      cursor: pointer;

      &:hover {
        background-color: ${({ theme }) => theme.lightGreen};

      }
    }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  & p.mainText {
    color: ${({ theme }) => theme.white};
  }

  & p.secondaryText {
    color: ${({ theme }) => theme.green};
  }
`

export const Result = styled.div`
  color: ${({ theme }) => theme.primaryColor};
  font-size: 55px;
  font-weight: 700;
`

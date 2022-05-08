import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.white};
  width: min(100% - 2rem, 900px);
  border-radius: 15px;
  padding: 40px;
  display: flex;
  height: 100%;
  gap: 20px;
  margin-top: 30px;

  @media(max-width: 694px) {
    flex-direction: column;
    width: 100%;
  }
`;
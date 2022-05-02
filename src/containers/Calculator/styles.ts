import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.white};
  width: 990px;
  border-radius: 15px;
  padding: 40px;
  display: flex;
  height: 458px;
  gap: 20px;
  margin-top: 30px;
`;
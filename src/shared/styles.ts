import styled from "styled-components";


export const Label = styled.label<{ error?: string }>`
  color: ${({ theme, error }) => error ? 'red' : theme.darkGreen};
  font-family: 700;
  margin-bottom: 0.3rem;
`;
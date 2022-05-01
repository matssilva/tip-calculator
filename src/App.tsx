import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme/theme';
import Logo from './assets/logo.svg';
import Calculator from './containers/Calculator/Calculator';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <img alt='Logo' src={Logo} />
      <Calculator />
    </ThemeProvider>

  );
}

export default App;

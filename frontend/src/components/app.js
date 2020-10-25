import React from 'react';

import Header from './header/header';
import Body from './body/body';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#63a4ff',
      main: '#1976d2',
      dark: '#004ba0',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
})

const App = () => (
  <ThemeProvider theme={theme}>
    <div className="app">
      <Header/>
      <Body/>
    </div>
  </ThemeProvider>
)

export default App;
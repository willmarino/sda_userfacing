import React from 'react';

import Header from './header/header';
import Body from './body/body';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    // primary: {
    //   light: '#b6ffff',
    //   main: '#81d4fa',
    //   dark: '#4ba3c7',
    //   contrastText: '#000000',
    // },
    // secondary: {
    //   light: '#ff7961',
    //   main: '#f44336',
    //   dark: '#ba000d',
    //   contrastText: '#000000',
    // }
    primary: {
      light: '#63a4ff',
      main: '#1976d2',
      dark: '#004ba0',
      contrastText: '#fff',
    },
    secondary: {
      light: '#4f5b62',
      main: '#263238',
      dark: '#000a12',
      contrastText: '#fff',
    }
  }
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
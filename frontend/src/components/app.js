import React from 'react';

import Header from './header/header';
import Body from './body/body';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
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
import React from 'react';

import Header from './header/header';
import Body from './body/body';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { black } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';

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
    <Button variant="contained" color="primary">Hey its me, button</Button>
    <div className="app">
      <Header/>
      <Body/>
    </div>
  </ThemeProvider>
)

export default App;
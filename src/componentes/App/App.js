import React, { Component } from 'react';

/////////// Componentes MATERIAL - UI Estilos ////////////////////
import purple from 'material-ui/colors/purple';
import green from 'material-ui/colors/green';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
/////////// Componentes MATERIAL - UI Estilos ////////////////////


import Login from '../Login'

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
  },
  status: {
    danger: 'orange',
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
          <Login />
      </MuiThemeProvider>
    );
  }
}

export default App;

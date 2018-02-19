import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom'

/////////// Componentes MATERIAL - UI Estilos ////////////////////
import purple from 'material-ui/colors/purple';
import green from 'material-ui/colors/green';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
/////////// Componentes MATERIAL - UI Estilos ////////////////////

import Header from '../Header'
import Login from '../Login'
import Signup from '../Registro'

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
        <HashRouter>
          <div>
            <Route exact path='/' render={() => (
               <Header />
             )}/>
            <Route path='/sign-in' render={() => (
              <Login />
            )} />
            <Route path='/sign-up' render={() => (
              <Signup />
            )} />
          </div>
        </HashRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;

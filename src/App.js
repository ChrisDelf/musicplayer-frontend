import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';


import './App.css';


// importing components
import Homepage from './components/homepage.js';
import MenuBar from './components/menubar/menubar.js';

const theme = {
  colors: {
    primary: {
      base: '#39A0ED',
      dark: '#32322C',
      light: '#f8f8ff',
    },
    secondary: {
      light: '#f8f8ff',
      base: '#36F1CD',
      dark: '#12C4A3',

    },
  }


};

 const Container = styled.div`
  background-color: ${props => props.theme.colors.primary.light};
  align-items: center;
  height: 100vh;
  .buttonContainer {
    justify-content: center;
  }
`;

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <MenuBar />
        <Router>
          <Route exact path="/" component={Homepage} />

        </Router>
      </Container>
    </ThemeProvider>
  )
}

export default App;

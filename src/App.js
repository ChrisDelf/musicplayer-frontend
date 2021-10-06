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

export const Container = styled.div`
  background-color: ${props => props.theme.colors.primary.base};
  align-items: center;
  height: 100vh;
  .buttonContainer {
    justify-content: center;
  }
  .mapContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-style: solid;
    border-color: white;
    border-width: 5px;
    width: 70%;
   
  }
  .mapButton {
    margin: 10px;
    width: 90%;
   
  }
  .title {
    font-size: 3rem;
  }
  .dungeonCon {
    height: 70%;
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

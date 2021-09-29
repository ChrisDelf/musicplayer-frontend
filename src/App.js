import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import { ThemeProvider, Button } from 'pcln-design-system';

import './App.css';


// importing components
import Homepage from './components/homepage.js';
import MenuBar from './components/menubar/menubar.js';
export const theme = {
  palette: {
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


function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <MenuBar />
      <Router>
        <Route exact path="/" component={Homepage} />

      </Router>
    </ThemeProvider>
  )
}

export default App;

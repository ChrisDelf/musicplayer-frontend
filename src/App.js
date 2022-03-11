import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import {
  Route,
  Routes,
  Redirect
} from 'react-router-dom';
import './App.css';



// importing components
import MenuBar from './components/menubar/menubar'
import Homepage from './components/homepage.js';
import DownLoader from './components/downloader/downloader.js'

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



function App() {

  return (
    <ThemeProvider theme={theme}>
      <MenuBar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/downloader/" element={<DownLoader />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App;

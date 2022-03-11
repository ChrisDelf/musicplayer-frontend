import React, { useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import {
  Route,
  Routes,
  Redirect
} from 'react-router-dom';
import './App.css';
import { setIsPlaying, setAudioTrack, setVolume, togglePlayFromList, updatePlaylistPlay } from './actions/userActions'
import { connect } from 'react-redux';


// importing components
import MenuBar from './components/menubar/menubar'
import Homepage from './components/homepage.js';
import DownLoader from './components/downloader/downloader.js'
import AudioPlayer from './components/audioPlayer/audioPlayer.js'

// Here lives the primary state for the audio Object
const audio = new Audio();


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



function App(props) {
  const audioMain = audio
  // For when the audio track is changed
  useEffect(() => {
    if (props.audioTrack != null) {



      audioMain.src = props.audioTrack.src
      audioMain.volume = props.volume

      if (props.playFromList == true) {

        props.setIsPlaying(true)

      }



    }

  }, [props.audioTrack])

  // handles the play logic
  useEffect(() => {
    if (audioMain.src != null && audioMain.src == props.audioTrack.src) {
      props.isPlaying ? audioMain.play() : audioMain.pause();
      props.togglePlayFromList(props.isPlaying)
    }



  }, [props.isPlaying])

  // handles when the song Ends
  useEffect(() => {

    audioMain.addEventListener('ended', () => setIsPlaying(false));
    return () => {
      audioMain.removeEventListener('ended', () => setIsPlaying(false));
    };

  }
    , [])
  return (
    <ThemeProvider theme={theme}>
      <MenuBar />
      <Routes>
        <Route exact path="/" element={<Homepage audioMain={audioMain} />} />
        <Route path="/downloader/" element={<DownLoader />} />
      </Routes>
      <AudioPlayer audioMain={audioMain} />
    </ThemeProvider>
  )
}

const mapStateToProps = state => {
  return {
    playlists: state.userReducer.playlist,
    audioTrack: state.userReducer.audioTrack,
    volume: state.userReducer.volume,
    isPlaying: state.userReducer.isPlaying,
    playFromList: state.userReducer.playFromList

  }
};


export default connect(mapStateToProps, { setVolume, setAudioTrack, updatePlaylistPlay, setIsPlaying, togglePlayFromList })(App);

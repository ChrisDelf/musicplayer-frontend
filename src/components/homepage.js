import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
//import Playlists from './playlist/playlist';
import MenuBar from './menubar/menubar.js';
import MusicList from './musicList/musicList.js';
import AudioPlayer from './audioPlayer/audioPlayer';
import { setIsPlaying, setAudioTrack, setVolume, togglePlayFromList, updatePlaylistPlay } from '../actions/userActions'
// Here lives the primary state for the audio Object
const audio = new Audio();


const Container = styled.div`
  justify-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: ${props => props.theme.colors.secondary.base};
  align-items: center;

`
const MainCont = styled.div`
  background-color: ${props => props.theme.colors.primary.dark};
  
  
  height: 100vh;
  .buttonContainer {
    justify-content: center;
  }
`;

const Homepage = (props) => {
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
    <>
      <MainCont>

        <Container>
          <MenuBar history={props.history} />

        </Container>
        <MusicList audioMain={audioMain} />


      </MainCont>
      <AudioPlayer audioMain={audioMain} />

    </>
  )
};




const mapStateToProps = state => {
  return {
    playlists: state.userReducer.playlist,
    audioTrack: state.userReducer.audioTrack,
    volume: state.userReducer.volume,
    isPlaying: state.userReducer.isPlaying,
    playFromList: state.userReducer.playFromList

  }
};


export default connect(mapStateToProps, { setVolume, setAudioTrack, updatePlaylistPlay, setIsPlaying, togglePlayFromList })(Homepage);

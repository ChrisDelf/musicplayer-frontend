import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
//import Playlists from './playlist/playlist';
import MusicList from './musicList/musicList.js';
import AudioPlayer from './audioPlayer/audioPlayer';



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
  const { audioMain } = props
  return (
    <>
      <MainCont >

        <MusicList audioMain={audioMain} />


      </MainCont>

    </>
  )
};






export default Homepage;

import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Playlists from './playlist/playlist';
import MediaPlayer from './mediaPlayer/mediaPlayers';
import MenuBar from './menubar/menubar.js';

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
  align-items: center;
  height: 100vh;
  .buttonContainer {
    justify-content: center;
  }
`;

const Homepage = (props) => {




  return (
    <MainCont>
      <Container>
        <MenuBar history = {props.history}/>
      </Container>
      <Playlists />
      <MediaPlayer />

    </MainCont>

  )
};

const mapStateToProps = state => {
  return {
    playlists: state.userReducer.playlist,

  }
};


export default connect(mapStateToProps, {})(Homepage);

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Playlists from './playlist/playlist';
import MenuBar from './menubar/menubar.js';
import MusicList from './musicList/musicList.js';


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
  const [song, setSong] = useState([])
  useEffect(() => {
    setSong(props.playingSong)

  }, [props.playingSong])

  return (
    <>
      <MainCont>
        <Container>
          <MenuBar history={props.history} />
        </Container>
        <MusicList />

        <figure>
          <figcaption>Music Title goes here</figcaption>
          <audio
            controls
            autoplay
            src={song}>
            Your browser does not support the
            <code>audio</code> element.
          </audio>
        </figure>
      </MainCont>
    </>
  )
};

const mapStateToProps = state => {
  return {
    playlists: state.userReducer.playlist,
    playingSong: state.userReducer.playingSong,

  }
};


export default connect(mapStateToProps, {})(Homepage);

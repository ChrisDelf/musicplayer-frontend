import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { connect } from 'react-redux';

const Container = styled.div`
  justify-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: ${props => props.theme.colors.secondary.base};
  align-items: center;

`

const AudioPlayer = (props) => {
  const [audio, setAudio] = useState(new Audio(props.selectedSong));
  const [playing, setPlaying] = useState(false);
  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    setPlaying(false)
    audio.pause();
    setAudio(new Audio(props.selectedSong))
    
  },
    [props.selectedSong]
  );

  console.log(props)
  useEffect(() => {
    playing ? audio.play() : audio.pause();
  },
    [playing]
  )



  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);


  return (

    <Container>
      <button onClick={toggle}> {playing ? "Pause" : "Play"}</button>
    </Container>);
}



const mapStateToProps = state => {
  return {
    playlists: state.userReducer.playlist,
    selectedSong: state.userReducer.selectedSong,

  }
};


export default connect(mapStateToProps, {})(AudioPlayer)

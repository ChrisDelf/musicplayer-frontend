import React, { useState } from "react";
import styled from 'styled-components';
import { connect } from 'react-redux';
import { setIsPlaying, setAudioTrack } from '../../actions/userActions'

const Cell = styled.div`
  justify-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.secondary.base};
  align-items: center;
  magrin: 4px;
  border-style: groove;

`
const ButtonContainer = styled.div`
  justify-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: ${props => props.theme.colors.secondary.base};
  align-items: center;
  magrin: 4px;
  border-style: groove;

`

const SongCell = (props) => {
  const { song } = props

  const toggle = () => {
    props.setIsPlaying(!props.isPlaying)
    if (props.isPlaying == true) {

      props.setAudioTrack(song)
    }

  };

  return (
    <Cell>
      <h>{song.title}</h>
      <ButtonContainer>
        <button onClick={toggle}> {props.isPlaying ? "Pause" : "Play"}</button>
        <button>D</button>
      </ButtonContainer>
    </Cell>
  )

}

const mapStateToProps = state => {
  return {
    isPlaying: state.userReducer.isPlaying,
    volume: state.userReducer.volume,
    audioTrack: state.userReducer.audioTrack,
  }
}


export default connect(mapStateToProps, { setIsPlaying, setAudioTrack })(SongCell);

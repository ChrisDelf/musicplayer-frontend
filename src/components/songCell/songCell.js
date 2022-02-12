import React, { useState } from "react";
import styled from 'styled-components';
import { connect } from 'react-redux';
import { setIsPlaying, togglePlayFromList, setAudioTrack } from '../../actions/userActions'

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
  const { song, audioMain } = props

  const toggle = () => {

    if (props.playFromList == false) {
      props.togglePlayFromList(true)
      props.setAudioTrack(song)

    }
    else if (props.playFromList == true) {
      props.togglePlayFromList(false)

      props.setIsPlaying(false)

    }

  };

  return (
    <Cell>
      <h>{song.title}</h>
      <ButtonContainer>
        <button onClick={toggle}> {props.playFromList ? "Pause" : "Play"}</button>
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
    playFromList: state.userReducer.playFromList,


  }
}


export default connect(mapStateToProps, { setIsPlaying, setAudioTrack, togglePlayFromList })(SongCell);

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
  const { song } = props

  const updatePlaylistPlayButton = (id, res) => {
    let tempList = props.selectedPlaylist
    for (let i = 0; i < tempList.length; i++) {
      if (tempList[i].pId == id) {
        tempList[i].isPlaying = res
      }
      else {
        tempList[i].isPlaying = !res
      }

    }
    return tempList



  }

  const toggle = (id) => {
    if (props.playFromList == false || props.playFromList == null) {
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

      <div>{song.title}</div>
      <ButtonContainer>
        <button onClick={() => { toggle(song.pId) }}> {props.playFromList ? "Pause" : "Play"}</button>
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
    selectedPlaylist: state.userReducer.selectedPlaylist


  }
}


export default connect(mapStateToProps, { setIsPlaying, setAudioTrack, togglePlayFromList })(SongCell);

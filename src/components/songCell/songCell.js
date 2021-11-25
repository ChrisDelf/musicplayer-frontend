import React, {useState} from "react";
import styled from 'styled-components';
import { connect } from 'react-redux';
import { playSelectedSong, setPlaying } from '../../actions/userActions'

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
  const [play, setPlay] = useState(false)
  const toggle = () => {
    props.playSelectedSong(song.id)
   // props.setPlaying(!props.playing)
    setPlay(!play)
     };

  return (
    <Cell>
      <h>{song.name}</h>
      <ButtonContainer>
        <button onClick={toggle}> {props.playing ? "Pause" : "Play"}</button>
        <button>D</button>
      </ButtonContainer>
    </Cell>
  )

}

const mapStateToProps = state => {
  return {
    playingSong: state.userReducer.song,
    playing: state.userReducer.playing
  }
}


export default connect(mapStateToProps, { playSelectedSong, setPlaying })(SongCell);

import styled from 'styled-components';
import { connect } from 'react-redux';
import {playSelectedSong} from '../../actions/userActions'

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

  return (
    <Cell>
      <h>{song.name}</h>
      <ButtonContainer>
        <button onClick = {() => {props.playSelectedSong(song.id)}}>P</button>
        <button>D</button>
    </ButtonContainer>
    </Cell>
  )

}

const mapStateToProps = state => {
  return{
    playingSong: state.userReducer.song,
  }
}


export default connect(mapStateToProps, {playSelectedSong})(SongCell);

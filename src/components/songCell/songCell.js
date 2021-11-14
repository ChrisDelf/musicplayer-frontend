import styled from 'styled-components';

const Cell = styled.div`
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
  const {song} = props

   return (
    <Cell>
      <h>{song.name}</h><button>P</button><button>D</button>
    </Cell>
  )

}


export default SongCell;

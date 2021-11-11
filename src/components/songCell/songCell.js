import styled from 'styled-components';

const Cell = styled.div`
  justify-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: ${props => props.theme.colors.secondary.base};
  align-items: center;

`

const SongCell = (props) => {
  const { name, date, length, history } = props;

  return (
    <Cell>
      {name}{length}<button>P</button><button>D</button>
    </Cell>
  )

}


export default SongCell;

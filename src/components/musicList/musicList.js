import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { loadRecentlyAdded } from '../../actions/userActions'
import SongCell from '../songCell/songCell'

const Container = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${props => props.theme.colors.primary.dark};
  align-self: center;
  `

const CellsContainer = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${props => props.theme.colors.primary.base};
  align-self: center;
  border-style: double;
  border-width: 5px;
  width: 40%;
  

`

const MusicList = (props) => {
  const { audioMain } = props

  const [musicList, setMusicList] = useState([]);
  useEffect(() => {

    async function fetchMusic() {
      try {
        await props.loadRecentlyAdded();
        setMusicList(props.recentlyAdded)
      } catch (err) {
      }
    }

    fetchMusic();
  }, [])



  return (

    <Container>
      <CellsContainer>
        {musicList != null ? (
          <>
            {musicList.map(s => (
              <SongCell song={s} audioMain={audioMain} />
            ))}
          </>
        ) : (<>Not loaded</>)}
      </CellsContainer>
    </Container>


  )


}



const mapStateToProps = state => {
  return {
    recentlyAdded: state.userReducer.recentlyAdded,

  }

}

export default connect(mapStateToProps, { loadRecentlyAdded })(MusicList)


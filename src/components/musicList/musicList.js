import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { loadRecentlyAdded, selectPlaylist } from '../../actions/userActions'
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


  useEffect(() => {

    if (props.selectedPlaylist != null) {
      async function fetchMusic() {
        try {
          await props.loadRecentlyAdded();


        } catch (err) {
        }
      }

      fetchMusic()
    }
  }, [])







  return (

    <Container>
      <CellsContainer>
        {props.selectedPlaylist != null ? (

          <>
            <h1>{props.selectedPlaylist.name}</h1>

            {props.selectedPlaylist.list.map(s => (
              <SongCell key={s.id} song={s} />
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
    selectedPlaylist: state.userReducer.selectedPlaylist,

  }

}

export default connect(mapStateToProps, { loadRecentlyAdded, selectPlaylist })(MusicList)


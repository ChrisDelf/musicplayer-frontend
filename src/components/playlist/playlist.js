import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { createPlaylist } from '../../actions/userActions';

const Container = styled.div`
  justify-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${props => props.theme.colors.secondary.light};
  align-items: center;

`
const Button = styled.button`
  background-color: ${props => props.theme.colors.secondary.dark};
  color: ${props => props.theme.colors.secondary.light}


`
const PlayLists = (props) => {
  return (
    <Container>
      PlayLists

      {(props.playlists == null || props.playlists.length == 0) ? (<div>No playlists Exist</div>) :


        props.playlists.map(p => (<Button>${p}</Button>
        ))
      }
    </Container>

  )



};

const mapStateToProps = state => {
  return {
    playlists: state.userReducer.playlists,

  }
}

export default connect(mapStateToProps, { createPlaylist })(PlayLists);

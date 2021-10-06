import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Playlists from './playlist/playlist';
const Container = styled.div`
  justify-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: ${props => props.theme.colors.secondary.light};
  align-items: center;

`


const Homepage = (props) => {




  return (

    <Container>
      <Playlists />
    </Container>


  )
};

const mapStateToProps = state => {
  return {
    playlists: state.userReducer.playlist,

  }
};


export default connect(mapStateToProps, {})(Homepage);

import React from 'react';
import styled from 'styled-components';

import { Container } from './menubarStyle';

const Button = styled.button`
  
  color:${props => props.theme.colors.primary.light};
  background-color: ${props => props.theme.colors.primary.base};
`



const MenuBar = props => {




  return (

    <Container>
      <Button onClick={() => props.history.push("/")} >Home</Button>
      <Button>Playlist</Button>
      <Button>Likes</Button>
      <Button onClick={() => props.history.push("/downloader/")}>Downloader</Button>
      <div>Search
        <input
          id='text'
          name='song'
          defualtValue='Song name here' /></div>

    </Container>

  )
}


export default MenuBar;

import React from 'react';
import styled from 'styled-components';

import {Container} from './menubarStyle';

const Button = styled.button`
  
  color:${props => props.theme.colors.primary.light};
  background-color: ${props => props.theme.colors.primary.base};
`



const MenuBar = (props) => {

  //const MenuContainer = styled(Container)`
  //  background-color: ${getPrimaryColor(`darkBlue`)}

  //
  //  `


  
  return (

    <Container>
        <Button >Home</Button>
        <Button>Playlist</Button>
        <Button>Likes</Button>
        <Button>Downloader</Button>
        <div>Search
          <input
            id='text'
            name='song'
            defualtValue='Song name here' /></div>
        
    </Container>

  )
}


export default MenuBar;

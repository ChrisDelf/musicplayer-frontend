import React from 'react';
import styled from 'styled-components';
import { Container } from './menubarStyle';
import { useNavigate } from "react-router-dom";
const Button = styled.button`
  
  color:${props => props.theme.colors.primary.light};
  background-color: ${props => props.theme.colors.primary.base};
`



const MenuBar = props => {
  let navigate = useNavigate();

  const onClickPush = (path) => {
    navigate(path)
  }

  return (

    <Container>
      <Button onClick={() => onClickPush('/')} >Home</Button>
      <Button>Playlist</Button>
      <Button>Likes</Button>
      <Button onClick={() => onClickPush('/downloader/')}>Downloader</Button>
      <div>Search
        <input
          id='text'
          name='song'
          placeholder='Song name here' /></div>

    </Container>

  )
}


export default MenuBar;

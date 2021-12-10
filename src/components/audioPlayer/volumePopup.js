import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const PopupBox = styled.div`
  position: absolute;
  background: #00000050;
  width: 300px;


 
`

const Container = styled.div`
  justify-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: ${props => props.theme.colors.secondary.base};
  align-items: center;

`
const VolumeDiv = styled.div`
    background-color: rgb(233, 233, 233);
    border-radius: .5rem;
`
const BarDiv = styled.div`
    background-color: rgb(62, 122, 235);
    height: 10px;
    border-radius: 1rem;
`

const VolumePopup = (props) => {
  const { audio, height, position } = props
  const [barHeight, setBarHeight] = useState();
  const [eleLeft, setEleLeft] = useState();
  const [eleWidth, setEleWidth] = useState();
  const [eleBottom, setEleBottom] = useState();
  const [eleheight, setEleHeight] = useState();
  // going to create our boundries for our bar

  const createContainer = () => {
    console.log(position.getBoundingClientRect().top, position.getBoundingClientRect().height)
    setEleHeight(position.getBoundingClientRect().height)


  }

  useEffect(() => {
    createContainer()
   }, [position])

  return (
    <PopupBox background="red" style={{ 
        top: `${position.getBoundingClientRect().top}px`, 
        left: `${position.getBoundingClientRect().left}px`,
        width: `${position.getBoundingClientRect().width}px`,
        bottom: `${-eleheight}px`}}>
      <Container>
        <VolumeDiv >
          <BarDiv style={{ height: `${barHeight}px` }} />
        </VolumeDiv>
      </Container>
    </PopupBox>

  )



}


export default VolumePopup;

import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const PopupBox = styled.div`

  background: #FF4500;
  width: 150px;


 
`

const Container = styled.div`
  justify-items: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background-color: #000080;
  align-items: center;

`
const VolumeDiv = styled.div`
    background-color: rgb(233, 233, 233);
  
    
`
const BarDiv = styled.div`
    height: 10px;
   
    background-color: #32cd32;
`

const VolumePopup = (props) => {
  const { audio } = props
  const [barWidth, setBarWidth] = useState();
  const [eleLeft, setEleLeft] = useState();
  const [eleWidth, setEleWidth] = useState();
  const [eleBottom, setEleBottom] = useState();
  const [eleheight, setEleHeight] = useState();
  const [toggle, setToggle] = useState(false)
  const ref = useRef(null);

  const [popUpPosition, setPopUpPosition] = useState();

  // going to create our boundries for our bar

  const createContainer = () => {
    setEleWidth(ref.current.clientWidth)
    setEleLeft(ref.current.getBoundingClientRect().left)


    setBarWidth(audio.volume * eleWidth)
    console.log(eleWidth)

  }
  const changeVolume = (event) => {

    const mouseCoordinates = { x: event.clientX, y: event.clientY }
    var xDif = mouseCoordinates.x - eleLeft

    var newVolume = xDif / eleWidth

    updateVolume(newVolume)
  }

  const updateVolume = (newVolume) => {

    audio.volume = newVolume
    setToggle(!toggle)


  }

  useEffect(() => {
    createContainer()
  }, [toggle])

  return (
    <PopupBox background="red" onClick={(event) => { changeVolume(event) }} >
      <div ref={ref}>
        <Container>
          <VolumeDiv >
            <BarDiv style={{ width: `${barWidth}px` }} />
          </VolumeDiv>
        </Container>
      </div>
    </PopupBox>

  )



}


export default VolumePopup;

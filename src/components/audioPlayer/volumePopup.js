import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { setVolume, toggleMute } from "../../actions/userActions"
import { connect } from 'react-redux';


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
  const { audioMain } = props
  const [barWidth, setBarWidth] = useState();
  const [eleLeft, setEleLeft] = useState();
  const [eleWidth, setEleWidth] = useState(150);
  const [eleBottom, setEleBottom] = useState();
  const [eleheight, setEleHeight] = useState();
  const [toggle, setToggle] = useState(false)
  const ref = useRef(null);

  const [popUpPosition, setPopUpPosition] = useState();



  // going to create our boundries for our bar

  const createContainer = () => {
    setEleWidth(ref.current.clientWidth)
    setEleLeft(ref.current.getBoundingClientRect().left)
    setBarWidth(props.volume * eleWidth)

  }
  const changeVolume = (event) => {

    const mouseCoordinates = { x: event.clientX, y: event.clientY }
    var xDif = mouseCoordinates.x - eleLeft

    var newVolume = xDif / eleWidth
    props.setVolume(newVolume)
    audioMain.volume = newVolume
    setToggle(!toggle)
  }




  useEffect(() => {
    const tempVolume = audioMain.volume
    setEleWidth(ref.current.clientWidth)
    setEleLeft(ref.current.getBoundingClientRect().left)
    setBarWidth(tempVolume * eleWidth)


  }, [toggle])



  return (
    <PopupBox background="red" onMouseLeave={() => { props.toggleVolume(false) }} onClick={(event) => { changeVolume(event) }} >
      <div ref={ref}>
        <Container >
          <VolumeDiv >
            <BarDiv style={{ width: `${barWidth}px` }} />
          </VolumeDiv>
        </Container>
      </div>
    </PopupBox>

  )



}

const mapStateToProps = state => {
  return {
    isMute: state.userReducer.isMute,
    volume: state.userReducer.volume,
  }


}


export default connect(mapStateToProps, { setVolume, toggleMute })(VolumePopup);

import React, { useRef, useState, useEffect } from "react";
import styled from 'styled-components';
import { connect } from 'react-redux';
import { setIsPlaying } from '../../actions/userActions'

const Container = styled.div`
  justify-items: center;:w

  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: ${props => props.theme.colors.secondary.base};
  align-items: center;

`

const ProgressBar = (props) => {
  const { audioMain } = props
  const [duration, setDuration] = useState();
  const [currentTime, setCurrentTime] = useState();
  const [canvasWidth, setCanvasWidth] = useState(500);
  const [canvasContext, setCanvasContext] = useState();
  const [coordinates, setCoordinates] = useState([]);
  const canvasRef = useRef(null);
  const canvas = canvasRef.current;



  if (audioMain != null) {
    audioMain.addEventListener('timeupdate', (() => {

      setCanvasContext(canvasRef.current.getContext('2d'))



      if (canvasContext != null) {

        updateBar()

      }


    }))
  }



  const mouseSelectTime = (event) => {

    const mouseCoordinates = { x: event.clientX, y: event.clientY }

    var canvasLeft = canvas.getBoundingClientRect().left

    var currentWidth = canvas.getBoundingClientRect().width
    var xDif = (mouseCoordinates.x - canvasLeft)

    var newProgress = xDif / currentWidth

    updateBar(newProgress)
  }


  // converting the time into minutes and seconds
  const convertElapsedTime = (inputSeconds) => {
    var seconds = Math.floor(inputSeconds % 60)
    if (seconds < 10) {
      seconds = "0" + seconds
    }
    var minutes = Math.floor(inputSeconds / 60)

    return minutes + ":" + seconds

  }

  // updating the progress bar and timer
  const updateBar = (mouseClick) => {

    canvasContext.clearRect(0, 0, canvasWidth, 50)
    canvasContext.fillStyle = "#000000";
    canvasContext.fillRect(0, 0, canvasWidth, 50)
    if (mouseClick == null) {
      var updateCurrentT = audioMain.currentTime
      var updateDuration = audioMain.duration

    }
    else {
      var updateDuration = audioMain.duration
      // need to do some math to get a new current time
      var updatedCurrentT = updateDuration * mouseClick
      audioMain.currentTime = updatedCurrentT

    }

    if (updateCurrentT == updateDuration) {

      props.setIsPlaying(true)
    }
    document.getElementById("current-time").innerHTML = convertElapsedTime(updateCurrentT)
    document.getElementById("duration").innerHTML = convertElapsedTime(updateDuration)

    var precentage = updateCurrentT / updateDuration
    var u_progress = (canvasWidth * precentage)
    canvasContext.fillStyle = "#2f4f4f"
    canvasContext.fillRect(0, 0, u_progress, 50)



  }


  return (<>


    <canvas ref={canvasRef} width="500" height="100" onClick={(event) => { mouseSelectTime(event) }} />

    <span id="current-time"></span>/
    <span id="duration"></span>

  </>)

}
const mapStateToProps = state => {
  return {
    playlists: state.userReducer.playlist,
    isPlaying: state.userReducer.isPlaying,

  }
};




export default connect(mapStateToProps, { setIsPlaying })(ProgressBar)


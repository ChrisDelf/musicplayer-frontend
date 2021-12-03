import React, { useRef, useState, useEffect } from "react";
import styled from 'styled-components';
import { connect } from 'react-redux';
import { setPlaying } from '../../actions/userActions'


const Container = styled.div`
  justify-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: ${props => props.theme.colors.secondary.base};
  align-items: center;

`

const ProgressBar = (props) => {
  const { audio } = props
  const [duration, setDuration] = useState();
  const [currentTime, setCurrentTime] = useState();
  const [canvasWidth, setCanvasWidth] = useState(500);
  const [canvasContext, setCanvasContext] = useState();
  const [coordinates, setCoordinates] = useState([]);
  const canvasRef = useRef(null);
  const canvas = canvasRef.current;


  const mouseSelectTime = (event) => {

    const mouseCoordinates = { x: event.clientX, y: event.clientY }

    var canvasLeft = canvas.getBoundingClientRect().left

    var currentWidth = canvas.getBoundingClientRect().width
    var xDif = (mouseCoordinates.x - canvasLeft)

    var newProgress = xDif / currentWidth



    updateBar(newProgress)
  }


  audio.addEventListener('timeupdate', (() => {
    setCanvasContext(canvasRef.current.getContext('2d'))

    if (canvasContext != null) {
      updateBar()


    }
  }))
  // converting the time into minutes and seconds
  const convertElapsedTime = (inputSeconds) => {
    var seconds = Math.floor(inputSeconds % 60)
    if (seconds < 10) {
      seconds = "0" + seconds
    }
    var minutes = Math.floor(inputSeconds / 60)

    return minutes + ":" + seconds

  }
  // when the song if fully loaded play the song
  audio.onloadedmetadata = (event) => {
    props.setPlaying(true)
    setDuration(audio.duration)
    setCurrentTime(audio.currentTime)
    document.getElementById("duration").innerHTML = convertElapsedTime(duration)
    document.getElementById("current-time").innerHTML = convertElapsedTime(currentTime)


  }
  // updating the progress bar and timer
  const updateBar = (mouseClick) => {
    
    canvasContext.clearRect(0, 0, canvasWidth, 50)
    canvasContext.fillStyle = "#000000";
    canvasContext.fillRect(0, 0, canvasWidth, 50)
  if (mouseClick == null) {
    var updateCurrentT = audio.currentTime
    var updateDuration = audio.duration

  }
    else {
    var updateDuration = audio.duration
    // need to do some math to get a new current time
    var updatedCurrentT = updateDuration * mouseClick
    audio.currentTime = updatedCurrentT

    }

    if (updateCurrentT == updateDuration) {

      props.setPlaying(true)
    }
    document.getElementById("current-time").innerHTML = convertElapsedTime(updateCurrentT)

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
    selectedSong: state.userReducer.selectedSong,
    playing: state.userReducer.playing

  }
};




export default connect(mapStateToProps, { setPlaying })(ProgressBar)


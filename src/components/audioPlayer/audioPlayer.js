import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { connect } from 'react-redux';
import ReactSlider from 'react-slider'

const Container = styled.div`
  justify-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: ${props => props.theme.colors.secondary.base};
  align-items: center;

`

const AudioPlayer = (props) => {
  const [state, setState] = useState({ x: 10, y: 10 })
  const [audio, setAudio] = useState(new Audio(props.selectedSong));
  const [playing, setPlaying] = useState(false);
  const [duration, setDuration] = useState();
  const [currentTime, setCurrentTime] = useState();
  const [canvasWidth, setCanvasWidth] = useState(500);
  const [canvas, setCanvas] = useState();
  const [canLeft, setCanLeft] = useState();
  const [canTop, setCanTop] = useState();
  const [canElem, setCanElem] = useState([]);
 
  //Shap Constructor
  function Shape(x,y,w,h,fill)
  {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.fill = fill;
  }


  const toggle = () => setPlaying(!playing);


  // grabbing the canvas element first
  // also going to grab all of the dom data need for the calculations for the onClick event
  window.onload = function() {
    setCanvas(document.getElementById("progress").getContext('2d'))
  //  setCanLeft(canvas.offsetLeft + canvas.clientLeft)
  //  setCanTop(canvas.offsetTop + canvas.clientTop)
    
  }



  // creating a on click on for the canvas element
 // const loadOnClick = (event) => {
  //console.log(event.clientX, event.clientY)
 // return null
//  }

 // canvas.onclick = loadOnClick()

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
  const updateBar = () => {
    canvas.clearRect(0, 0, canvasWidth, 50)
    canvas.fillStyle = "#000000";
    canvas.fillRect(0, 0, canvasWidth, 50)

    var updateCurrentT = audio.currentTime
    var updateDuration = audio.duration
    if (updateCurrentT == updateDuration) {

      setPlaying(true)
    }
    document.getElementById("current-time").innerHTML = convertElapsedTime(updateCurrentT)

    var precentage = updateCurrentT / updateDuration
    var u_progress = (canvasWidth * precentage)
    canvas.fillStyle = "#2f4f4f"
    canvas.fillRect(0, 0, u_progress, 50)

 //  var imageData = canvas.createImageData(width)



  }
  // drawing our drag object onto the progress canvas
  const drawSelector = (updateCurrentT, u_progress) => {
    //canvas.push(new Shape()

  }

  // when the song if fully loaded play the song
  audio.onloadedmetadata = (event) => {
    setPlaying(true)
    setDuration(audio.duration)
    setCurrentTime(audio.currentTime)
    document.getElementById("duration").innerHTML = convertElapsedTime(duration)
    document.getElementById("current-time").innerHTML = convertElapsedTime(currentTime)


  }
  // during song we want to update our timer and progress bar
  audio.addEventListener('timeupdate', (() => {
    if (canvas != null) {
      updateBar()
    }
  }))

  // when a song pause the current audio
  useEffect(() => {
    setPlaying(false)
    audio.pause();
    setAudio(new Audio(props.selectedSong))
  },
    [props.selectedSong]
  );

  // plays when the play button is played
  useEffect(() => {
    playing ? audio.play() : audio.pause();
  },
    [playing]
  )




  // when the song ends stop the song
  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);


  return (

    <Container>
      <button onClick={toggle}> {playing ? "Pause" : "Play"}</button>
      <canvas id="progress" width="500" height="100">
    
      </canvas>

      <span id="current-time"></span>/
      <span id="duration"></span>
    </Container>);
}



const mapStateToProps = state => {
  return {
    playlists: state.userReducer.playlist,
    selectedSong: state.userReducer.selectedSong,

  }
};


export default connect(mapStateToProps, {})(AudioPlayer)

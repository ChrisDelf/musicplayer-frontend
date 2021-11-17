import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { connect } from 'react-redux';

const Container = styled.div`
  justify-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: ${props => props.theme.colors.secondary.base};
  align-items: center;

`

const AudioPlayer = (props) => {
  const [audio, setAudio] = useState(new Audio(props.selectedSong));
  const [playing, setPlaying] = useState(false);
  const [duration, setDuration] = useState();
  const [currentTime, setCurrentTime] = useState();
  const [canvasWidth, setCanvasWidth] = useState(500);
  const [canvas, setCanvas] = useState();

  const toggle = () => setPlaying(!playing);

 window.onload = function () {
    setCanvas(document.getElementById("progress").getContext('2d'))
    
  }

  const convertElapsedTime = (inputSeconds) => {
    var seconds = Math.floor(inputSeconds % 60)
    if (seconds < 10) {
      seconds = "0" + seconds
    }
    var minutes = Math.floor(inputSeconds / 60)

    return minutes + ":" + seconds

  }

  const updateBar = () => {
    canvas.clearRect(0, 0, canvasWidth, 50)
    canvas.fillStyle = `000`;
    canvas.fillRect(0, 0, canvasWidth, 50)

    var updateCurrentT = audio.currentTime
    var updateDuration = audio.duration

    if (updateCurrentT == updateDuration) {

      setPlaying(true)
    }
    document.getElementById("current-time").innerHTML = convertElapsedTime(currentTime)

    var precentage = updateCurrentT / updateDuration
    var u_progress = (canvasWidth * precentage)
    canvas.fillStyle = "#FF0000"
    canvas.fillRect(0, 0, u_progress, 50)


  }

  audio.onloadedmetadata = (event) => {
    setPlaying(true)
    setDuration(audio.duration)
    setCurrentTime(audio.currentTime)
    document.getElementById("duration").innerHTML = convertElapsedTime(duration)
    document.getElementById("current-time").innerHTML = convertElapsedTime(currentTime)


  }

  audio.progress = (event) => {
    console.log("sdfsdf")
    updateBar()

  }

  useEffect(() => {
    setPlaying(false)
    audio.pause();
    setAudio(new Audio(props.selectedSong))
  },
    [props.selectedSong]
  );


  useEffect(() => {
    playing ? audio.play() : audio.pause();
  },
    [playing]
  )





  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);


  return (

    <Container>
      <button onClick={toggle}> {playing ? "Pause" : "Play"}</button>
      <canvas id="progress" width="500" height="100"></canvas>
      
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

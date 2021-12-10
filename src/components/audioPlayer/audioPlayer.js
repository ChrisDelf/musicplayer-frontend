import React, { useRef, useState, useEffect } from "react";
import styled from 'styled-components';
import { connect } from 'react-redux';
import ProgressBar from './progressBar';
import SoundButton from './soundButton';
import VolumePopup from './volumePopup';
import { setPlaying } from '../../actions/userActions'




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
  const [duration, setDuration] = useState();
  const [currentTime, setCurrentTime] = useState();
  const [canvasWidth, setCanvasWidth] = useState(500);
  const [canvas, setCanvas] = useState();
  const [isVolumeOpen, setIsVolumeOpen] = useState(false);
  const soundButtonRef = useRef(null);
  const soundButtonPos = soundButtonRef.current


  const toggleVolume = () => {
    setIsVolumeOpen(!isVolumeOpen)

  }


  const toggle = () => props.setPlaying(!props.playing);


  // when a song pause the current audio
  useEffect(() => {
    props.setPlaying(false)
    audio.pause();
    setAudio(new Audio(props.selectedSong))
  },
    [props.selectedSong]
  );

  // plays when the play button is played
  useEffect(() => {
    props.playing ? audio.play() : audio.pause();
  },
    [props.playing]
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
      <button onClick={toggle}> {props.playing ? "Pause" : "Play"}</button>
      <ProgressBar audio={audio} setPlaying={setPlaying} />
      <div className = "soundButton" ref={soundButtonRef}>
      <SoundButton audio={audio} toggleVolume={toggleVolume}/>
      </div>
      {isVolumeOpen == true ? (<VolumePopup audio={audio} position={soundButtonPos} />) : (<></>)}

    </Container>

  );
}



const mapStateToProps = state => {
  return {
    playlists: state.userReducer.playlist,
    selectedSong: state.userReducer.selectedSong,
    playing: state.userReducer.playing

  }
};


export default connect(mapStateToProps, { setPlaying })(AudioPlayer)

import React, { useRef, useState, useEffect } from "react";
import styled from 'styled-components';
import { connect } from 'react-redux';
import ProgressBar from './progressBar';
import SoundButton from './soundButton';
import VolumePopup from './volumePopup';
import { setIsPlaying, setAudioTrack, setVolume } from '../../actions/userActions'




const Container = styled.div`
  justify-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: ${props => props.theme.colors.secondary.base};
  align-items: center;

`
const VolumeBox = styled.div`
  width:100px;
  height: 40px;

`
const AudioPlayer = (props) => {
  const { audioMain } = props
  const [duration, setDuration] = useState();
  const [currentTime, setCurrentTime] = useState();
  const [canvasWidth, setCanvasWidth] = useState(500);
  const [canvas, setCanvas] = useState();
  const [isVolumeOpen, setIsVolumeOpen] = useState(false);
  const soundButtonRef = useRef(null);
  const soundButtonPos = soundButtonRef.current


  const toggleVolume = (isOpen) => {
    if (isOpen == false) { }
    else {


    }
    setIsVolumeOpen(isOpen)
    console.log("affasdf")

  }



  const toggle = () => props.setIsPlaying(!props.isPlaying);


  useEffect(() => {


  }, [audioMain.volume])



  return (

    <Container>

      <div className="soundButton" ref={soundButtonRef}>
        {audioMain != null ? (<><button onClick={toggle}> {props.isPlaying ? "Pause" : "Play"}</button>
          <ProgressBar audioMain={audioMain} /> </>) : (<></>)}

      </div>
      <SoundButton audioMain={audioMain} toggleVolume={toggleVolume} />
      {isVolumeOpen == true ? (<VolumePopup audioMain={audioMain} position={soundButtonPos} toggleVolume={toggleVolume} />) : (<></>)}

    </Container>

  );
}



const mapStateToProps = state => {
  return {

    playlists: state.userReducer.playlist,
    selectedSong: state.userReducer.selectedSong,
    isPlaying: state.userReducer.isPlaying,
    volume: state.userReducer.volume

  }
};


export default connect(mapStateToProps, { setIsPlaying, setAudioTrack, setVolume })(AudioPlayer)

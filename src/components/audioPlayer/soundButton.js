import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { connect } from 'react-redux';
import quite from '../../images/quite.png';
import mute from '../../images/mute.png';
import loud from '../../images/loud.png';





const Container = styled.div`
  justify-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: ${props => props.theme.colors.secondary.base};
  align-items: center;

`

const ImageCon = styled.img`
    width: 40px;
    height: 40%;
    `
const SoundButton = (props) => {
  const { audio } = props
  const [soundIcon, setSoundIcon] = useState(quite)
  const [prevVolume, setPrevVolume] = useState()
  
  const quiteIcon = quite

  const mute = (event) => {
    if (audio.volume > 0) {
      var tempV = audio.volume
      //   setSoundIcon(mute)
      audio.volume = 0
      setPrevVolume(tempV)

    }
    else {
      //  setSoundIcon(quite)
      audio.volume = prevVolume
    }

  }

  const volumeIcon = () => {
    if (audio.volume == 0) {
      return <ImageCon src={mute} alt="failed to load" onClick={(event) => { mute(event) }} />
    }
    if (audio.volume < .5) {
      return <ImageCon src={quite} alt="failed to load" onClick={(event) => { mute(event) }} />
    }
    else {
      return <ImageCon src={loud} alt="failed to load" onClick={(event) => { mute(event) }} />

    }


  }


  return (
    <div>
      {audio.volume == 0 ? (<ImageCon src={mute} alt="failed to load" onClick={(event) => { mute(event) }} />
      ) : (

        <ImageCon src={quiteIcon} alt="failed to load" onClick={(event) => { mute(event) }} />

      )}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    playList: state.userReducer.playList,


  }
};

export default connect(mapStateToProps, {})(SoundButton)

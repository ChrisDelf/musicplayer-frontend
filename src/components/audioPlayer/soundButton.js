import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Icon } from 'semantic-ui-react';
import { setVolume, toggleMute } from "../../actions/userActions"





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

const ImageCon = styled.img`
    width: 40px;
    height: 40%;
    `
const SoundButton = (props) => {

  const { toggleVolume, audioMain } = props
  const [iconName, setIconName] = useState()




  const volumeIcon = () => {

    if (audioMain.volume == 0 || props.isMute == true) {
      setIconName('volume off')

      audioMain.volume = 0
    }
    else if (audioMain.volume <= .5) {
      setIconName('volume down')

    }
    else {
      setIconName('volume up')
    }


  }

  useEffect(() => {
    audioMain.volume = props.volume
    volumeIcon()


  }, [props.isMute, props.volume])

  return (

    <Icon.Group size='large' >
      <Icon size='small' color='black' name={iconName} onClick={() => {
        props.toggleMute(!props.isMute)
        volumeIcon()
      }}

      />
    </Icon.Group>

  )
}

const mapStateToProps = state => {
  return {
    playList: state.userReducer.playList,
    isMute: state.userReducer.isMute,
    volume: state.userReducer.volume,
    audioTrack: state.userReducer.audioTrack,


  }
};

export default connect(mapStateToProps, { setVolume, toggleMute })(SoundButton)

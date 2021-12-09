import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Icon } from 'semantic-ui-react'





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
  const { audio , toggleVolume} = props
  const [iconName, setIconName] = useState()
  const [prevVolume, setPrevVolume] = useState()

  const mute = (event) => {
    if (audio.volume > 0) {
      var tempV = audio.volume
      audio.volume = 0
      setPrevVolume(tempV)

    }
    else {

      audio.volume = prevVolume
    }

  }


  const volumeIcon = () => {

    if (audio.volume == 0) {
      setIconName('volume off')
    }
    else if (audio.volume <= .5) {
      setIconName('volume down')

    }
    else {
      setIconName('volume up')
    }


  }

  useEffect(() => {
    volumeIcon()

  }, [])

  return (
    <Icon.Group size='huge'>
      <Icon size='small' color='black' name={iconName} onClick={() => {
        mute()
        volumeIcon()
           }}
     onMouseOver= {() => {console.log("asdfsa")
   toggleVolume()
     }}
    />
    </Icon.Group>
  )
}

const mapStateToProps = state => {
  return {
    playList: state.userReducer.playList,


  }
};

export default connect(mapStateToProps, {})(SoundButton)

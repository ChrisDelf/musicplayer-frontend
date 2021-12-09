import React , {useState, useEffect}from 'react';
import styled from 'styled-components';

const PopupBox = styled.div`
  position: fixed;
  background: #00000050;
  width: 300;
  height: 400px;
  top: 32;
  left: 32;
`

const Container = styled.div`
  justify-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: ${props => props.theme.colors.secondary.base};
  align-items: center;

`
const VolumeDiv = styled.div`
    background-color: rgb(233, 233, 233);
    border-radius: .5rem;
`
  const BarDiv = styled.div`
    background-color: rgb(62, 122, 235);
    height: 10px;
    border-radius: 1rem;
`

const VolumePopup = (props) => {
  const { audio , height } = props
  const [barHeight, setBarHeight] = useState();


  return (
    <PopupBox>
      <Container>
      <VolumeDiv style={{height: height}}>
      <BarDiv style ={{height: `${barHeight}px`}}/>
      </VolumeDiv>
      </Container>
    </PopupBox>

  )



}


export default VolumePopup;

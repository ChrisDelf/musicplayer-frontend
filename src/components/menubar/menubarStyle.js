import styled from 'styled-components';

export const Container = styled.div`
  justify-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: ${props => props.theme.colors.secondary.base};
  align-items: center;
  
  .buttonContainer {
    justify-content: center;
  }
  .mapContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-style: solid;
    border-color: white;
    border-width: 5px;
    width: 70%;
   
  }
  .mapButton {
    margin: 10px;
    width: 90%;
   
  }
  .title {
    font-size: 3rem;
  }
  .dungeonCon {
    height: 70%;
  }
`;


//export const Button = styled.button`
  
//  color=${props => props.theme.colors.primary.light}
//  background-color: ${props => props.theme.colors.primary.base}



//`

  









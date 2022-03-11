import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const Container = styled.div`
  justify-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: orange;
  align-items: center;
`
const Form = styled.form`
background-color: orange;

`

const Input = styled.input`
background-color: orange;

`

const Label = styled.label`
background-color: orange;

`

const FormBtn = styled.button`
background-color: orange;

`
const DownLoader = props => {








  return (

    <Container>

      <Form>
        <Label>Paste the link to the song here</Label>
        <Input type="text" id="address" />
        <FormBtn>Download</FormBtn>

      </Form>

    </Container>)



};




export default DownLoader;



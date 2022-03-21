import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

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
  const [address, setAddress] = useState("");

  const handleChange = (event) => {
    setAddress(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()

    let body = {
      title: "",
      address: address
    }
    const api = "http://localhost:8090/api/user/";

    axios
      .post(`${api}upload`, body)
      .then(res => {
        return res
      })
      .catch(err => {
        return err
      })


  }





  return (

    <Container>

      <Form onSubmit={handleSubmit}>
        <Label>Paste the link to the song here</Label>
        <label>
          <Input type="text" value={address} onChange={handleChange} />
        </label>
        <FormBtn type="submit" >Download</FormBtn>

      </Form>

    </Container>)



};




export default DownLoader;



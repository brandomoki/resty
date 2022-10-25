import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import './form.scss';

const Form = (props) => {

  let handleSubmit = e => {
    e.preventDefault();
    const formData = {
      method: 'GET',
      url: 'https://pokeapi.co/api/v2/pokemon',
    };
    props.handleApiCall(formData);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input name='url' type='text' />
          <Button type="submit" color='secondary' variant='contained' >GO!</Button>
        </label>
        <ButtonGroup color='secondary' variant="contained" aria-label="outlined primary button group">
          <Button id="get">GET</Button>
          <Button id="post">POST</Button>
          <Button id="put">PUT</Button>
          <Button id="delete">DELETE</Button>

          
      
        </ButtonGroup>
        
      </form>
    </>
  );

}

export default Form;

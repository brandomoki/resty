import React from 'react';
import { useState } from 'react';



import './form.scss';

const Form = (props) => {

  const [method, setMethod] = useState('GET');
  const [getUrl, setGetUrl] = useState('');
  const [JSON, setJSON] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      method,
      url: getUrl,
      JSON,
    };
    props.handleApiCall(formData);
  };

  const handleMethod = (e) => {
    setMethod(e.target.id);
    setJSON('');
  }
 
  
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input name='url' type='text' onChange={(e) => setGetUrl(e.target.value)} />
          <button type="submit">GO!</button>
        </label>
        <textarea className="text-area-box" onChange={(e) => setJSON(e.target.value)} type="text" placeholder="PUT/POST JSON here"/>
        <label className="methods">
            <span className='spanButtons' id="GET" onClick={handleMethod}>GET</span>
            <span className='spanButtons' id="Post" onClick={handleMethod}>POST</span>
            <span className='spanButtons' id="PUT" onClick={handleMethod}>PUT</span>
            <span className='spanButtons' id="DELETE" onClick={handleMethod}>DELETE</span>
        </label>
      </form>
    </>
  );

}

export default Form;


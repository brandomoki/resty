import React from 'react';

import { useState, useEffect } from 'react';

import axios from'axios';

import './app.scss';
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';



const App = () => {
  
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  const [headers, setHeaders] = useState(null)

  useEffect(() => {
    console.log('using effect');
  });
  

  const callApi = async (url, method) => {

    let formData = await axios({
      method: method ,
      url: url, 
      
    })
    let params = {
      url,
      method
    }
    console.log('form',formData);

    setData(formData.data.results);
    setHeaders(formData.headers);
    setRequestParams(params);
    
  }

  return (
    <>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url ? JSON.stringify(requestParams.url, undefined, 2) : null}</div>
      <Form handleApiCall={callApi} />
      <Results data={data} headers={headers}/>
      <Footer />
    </>
  );


}
export default App;

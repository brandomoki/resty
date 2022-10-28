import React from 'react';

import { useReducer, useEffect } from 'react';

import axios from'axios';

import './app.scss';
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';



const App = () => {

  let initialState = {
    data: null,
    requestParams: {},
    headers: null,
    history: [],
  }
  
  let requestReducer = (state, action) => {
    
    switch (action.type) {
      case 'SET_REQUEST_PARAMS':
        return { ...state, requestParams: action.payload };
      case 'SET_DATA':
        return { ...state, data: action.payload };
        case 'SET_HEADERS':
        return { ...state, headers: action.payload };
      case 'UPDATE_HISTORY':
        return { ...state, history: [...state.history, action.payload] }
      default:
        return state;
    }
  }
          
          
  const [state, dispatch] = useReducer(requestReducer, initialState);
  console.log('this is  initial state',initialState);

  useEffect(() => {
    
    const callApi = async () => {
  
      let responseData = await axios(state.requestParams);
      
      console.log('form', responseData);

      setData(responseData.data);
      setHeaders(responseData.headers);
      updateHistory(state.requestParams, responseData.data);
      
    }
    callApi();

  }, [state.requestParams])

  const setRequestParams = (formData) => {
    console.log('requestParams******************', formData);
    dispatch({
      type: 'SET_REQUEST_PARAMS',
      payload: formData,
    });
  }

  const setData = (data) => {
    dispatch({
      type: 'SET_DATA',
      payload: data,
    });
  }

  const setHeaders = (headers) => {
    dispatch({
      type: 'SET_HEADERS',
      payload: headers,
    });
  }

  const updateHistory = (requestParams) => {
    dispatch({
      type: 'UPDATE_HISTORY',
      payload: requestParams,
    });
  }

  const triggerApi = (formData) => {
    setRequestParams(formData);
  }


  return (
    <>
      <Header />
      <div>Request Method: {state.requestParams.method}</div>
      <div>URL: {state.requestParams.url ? JSON.stringify(state.requestParams.url, undefined, 2) : null}</div>
      <Form handleApiCall={triggerApi} />
      
      <Results data={state.data} headers={state.headers} history={state.history}/>
      <Footer />
    </>
  );


}
export default App;

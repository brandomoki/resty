import React from 'react';

import { useReducer, useEffect } from 'react';

import axios from'axios';

import './app.scss';
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import History from './components/history/history';


const App = () => {

  let initialState = {
    data: null,
    requestParams: {},
    headers: null,
    history: [],
  }

  let requestReducer = (state, action) => {

    switch (action.type) {
      case 'SET_REQ_PARAMS':
        return { ...state, requestParams: action.payload };
      case 'SET_DATA':
        return { ...state, data: action.payload };
      case 'UPDATE_HISTORY':
        return { ...state, history: [...state.history, action.payload] }
      default:
        return state;
    }
  }
  
  const [state, dispatch] = useReducer(requestReducer, initialState);


  // const [requestParams, setRequestParams] = useState({});

  useEffect(() => {
    
    const callApi = async (url, method) => {
  
      let formData = await axios(state.requestParams);
      let data = {
        data: formData.data,
        headers: formData.data
      }
      console.log('form',formData);
  
      setData(formData);
      
      updateHistory(state.requestParams, data)
      
      
    }
    if (state.requestParams && state.requestParams.method) callApi();
    

  }, [state.requestParams])

  const setRequestParams = (requestParams) => {
    dispatch({
      type: 'SET_REQ_PARAMS',
      payload: requestParams,
    });
  }

  const setData = (data) => {
    dispatch({
      type: 'SET_DATA',
      payload: data,
    });
  }

  const updateHistory = (requestParams, data) => {
    let reqHistory = {
      method: requestParams.method,
      url: requestParams.url,
      data: data
    }
    dispatch({
      type: 'UPDATE_HISTORY',
      payload: reqHistory
    });
  }

  const triggerApi = (requestParams) => {
    setRequestParams(requestParams);
  }


  


  return (
    <>
      <Header />
      <div>Request Method: {state.requestParams.method}</div>
      <div>URL: {state.requestParams.url ? JSON.stringify(state.requestParams.url, undefined, 2) : null}</div>
      <History history={state.history} />
      <Form handleApiCall={triggerApi} />
      <Results data={state.data} headers={state.headers}/>
      <Footer />
    </>
  );


}
export default App;

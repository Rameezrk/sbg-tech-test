import React, {useEffect, useState} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {


  // The WebSocket API responds to several different actions: getEvent, getMarket, getOutcome and getLiveEvents
// To fetch all the currently live events (without primary markets) you can do something similar to the below
// NB. All payloads to the WebSocket API should be stringified
websocket.send(JSON.stringify({type: "getLiveEvents", primaryMarkets: false}));


  // const [sbgEvents, setSBGEvents] = useState([])
  

  // const BASE_URL = 'http://localhost:8888/'
  

  // useEffect(() => {
  //   fetch(BASE_URL)
  //     .then(res => res.json())
  //     .then(data => {
        
  //       console.log(data)
        
      
        
  //     })
      
  // }, [])

  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;

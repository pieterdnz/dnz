import React from 'react';
import logo from './download.gif';
import './App.css';
import {isAndroid,isMobile,isIOS} from 'react-device-detect';

function App() {
  return (
    <div className="App" >
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Maqro on {isAndroid && 'Android' }  {isMobile && 'Mobile' }  {isIOS && 'Mobile' } 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

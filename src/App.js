import React from 'react';
import logo from './cat.gif';
import './App.css';
import {isAndroid,isMobile,isIOS,isChrome} from 'react-device-detect';

function App() {
  return (
    <div className="App" >
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Maqro op {isAndroid && 'Android' }  {isMobile && 'Mobile' }  {isIOS && 'Mobile' } 
        </p>
        <p>
          {isChrome && 'Chrome'}
        </p>
        <a
          className="App-link"
          href="https://www.makrokerstpakketten.nl/"
          target="_blank"
          rel="noopener noreferrer"
        >
         Ook voor valentijn shop je bij makrokerstpakketten!
        </a>
      </header>
    </div>
  );
}

export default App;

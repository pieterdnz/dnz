import React from 'react';
import logo from './download.gif';
import './App.css';
import {isAndroid,isMobile,isIOS,isChrome} from 'react-device-detect';

function App() {
  return (
    <div className="App" >
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Maqro on {isAndroid && 'Android' }  {isMobile && 'Mobile' }  {isIOS && 'Mobile' } 
        </p>
        <p>
          {isChrome && 'Chorme'}
        </p>
        <a
          className="App-link"
          href="https://www.makrokerstpakketten.nl/"
          target="_blank"
          rel="noopener noreferrer"
        >
         Bij makrokerstpakketten shop je voor valentijn gifts
        </a>
      </header>
    </div>
  );
}

export default App;

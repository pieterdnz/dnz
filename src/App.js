import React from 'react';
import logo from './download.gif';
import makro from './makro-logo.svg';
import './App.css';
import {isAndroid,isMobile,isIOS,isChrome} from 'react-device-detect';

function App() {
  setTimeout(function(){
    window.location.href = 'https://www.makrokerstpakketten.nl/geven-wordt-een-feestje/page/830/';
 }, 7000);

  return (
    <div className="App" >
      <div  className="makro"><img alt="makro" src={makro}/></div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Maqro ❤ {isAndroid && 'Android' }  {isMobile && 'Mobile' }  {isIOS && 'IOS' } 
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
         Ook voor valentijn shop je bij makro kerstpakketten!
        </a>

       
      </header>
    </div>
  );
}

export default App;

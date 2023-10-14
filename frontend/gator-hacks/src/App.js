
// IMPORTS

// Base Libraries and Files
import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

// CSS
import './App.css';
import './components/ShadowMessage.css'

// Components
// import InputComponent from './components/InputComponent';
import ShadowMessage from './components/ShadowMessage';


function App() {
  return (
    <div>

      <div className="content">
        <div class="column">
          <ShadowMessage sentBy="app" text="first box"/>
          <ShadowMessage sentBy="app" text="second box"/> 
          <ShadowMessage sentBy="app" text="third box"/>    
        </div>
        <div class="column">
          <h1>I'm stinky.</h1>
        </div>
      </div>


      <div className="main-input">
      </div>

    </div>
  );
}

export default App;

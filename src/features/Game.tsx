import React from 'react';
import { Timer } from './timer/Timer';
import { Word } from './words/Word';
import logo from '../logo.svg';

import '../App.css';

export function Game() {
  return(
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Timer />
        <Word />
      </header>
    </div>
  ) 
}
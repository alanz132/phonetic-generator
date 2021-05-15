import React from 'react';
import logo from './logo.svg';
import { Timer } from './features/timer/Timer';
import { Word } from './features/words/Word';
import { Switch, Route, BrowserRouter as Router} from 'react-router-dom'
import { Start } from './features/Start'
import { Game } from './features/Game'

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component = { Start }/>
        <Route exact path="/game" component = { Game } />
      </Switch>
    </Router>
  );
}

export default App;

import React,  { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import MobxComponent from "./components/MobxComponent"
import HomeComponent from "./components/HomeComponent"
import FormilyComponent from "./components/FormilyComponent"

function App() {

  return (
    <div className="App">
      <h2>Open Typescript way of components</h2>
      <br />
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {/*<li>*/}
            {/*  <Link to="/about">About</Link>*/}
            {/*</li>*/}
            <li>
              <Link to="/mobx">mobx</Link>
            </li>
            <li>
              <Link to="/formily">formily</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/mobx">
            <MobxComponent />
          </Route>
          <Route path="/formily">
            <FormilyComponent />
          </Route>
          <Route path="/">
            <HomeComponent />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}


export default App;

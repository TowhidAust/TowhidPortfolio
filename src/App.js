import React from 'react';
import './App.css';
import Particles from 'react-particles-js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
// import { Button } from 'react-bootstrap';


function App() {
  return (
    <Router>
      <div className="MainAppContainer">      
            <Switch>
              <Route path="/Home" component={Home}></Route>
              <Route path="/About" component={About}></Route>
            </Switch>
      </div>
        
    </Router>
   
  );
}

export default App;

import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import LeftDrawer from './components/Left_Drawer';


function App() {
  return (
    <Router>
      <div className="MainAppContainer"> 
          <LeftDrawer/>     
            <Switch>
              <Route path="/" exact component={Home}></Route>
              <Route path="/About" exact component={About}></Route>
            </Switch>
      </div>
        
    </Router>
   
  );
}

export default App;

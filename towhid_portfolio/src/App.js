import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import LeftDrawer from './components/Left_Drawer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className="MainAppContainer"> 
            <Switch>
              <Route path="/" exact>
                <LeftDrawer name="towhid"/>
                <Home/>
              </Route>
              <Route path="/About" exact>
                  <LeftDrawer name="towhid"/>     
                  <About/>
              </Route>
              <Route path="/Resume" exact>
                <LeftDrawer name="towhid"/>     
                <Resume/>
              </Route>
              <Route path="/Portfolio" exact component={Portfolio}>
                <LeftDrawer name="towhid"/>     
                <Portfolio/>
              </Route>
              <Route path="/Blog" exact component={Blog}>
                <LeftDrawer name="towhid"/>     
                <Blog/>
              </Route>
              <Route path="/Contact" exact component={Contact}>
                <LeftDrawer name="towhid"/>     
                <Contact/>
              </Route>
              <Route path="/Login" exact component={Login}>
                <Login/>
              </Route>
            </Switch>
      </div>
        
    </Router>
   
  );
}

export default App;

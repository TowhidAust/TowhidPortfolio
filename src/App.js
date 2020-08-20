import React from 'react';
import './App.css';
import Particles from 'react-particles-js';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import LeftDrawer from './components/Left_Drawer/left_drawer';


function App() {
  return (
    <Router>
      <div className="MainAppContainer">
            <div className="particle_banner">
                <Particles
                  style={{backgroundColor: '#10121B'}}
                  width="100%"
                  height="100vh"
                  params={{

                    particles: {
                    
                      color: {
                        value: "#9FA7BE"
                      },
                      line_linked: {
                        color: {
                          value: "#10121B"
                        }
                      },
                      number: {
                        value: 50
                      },
                      size: {
                        value: 3
                      }
                    }
                    
                  }}
                />
                <header className="particle_contents">
                  
                  <h1 className="name"> Hi, i am  <b style={{color:"#037BF9"}}> Md. Towhidul Islam</b> </h1>
                  <p style={{color: "#9FA7BE", fontSize:"1.8em", width: "50%", margin:"auto", textAlign:"center"}}>Full Stack Software Engineer, Corona Engineering Ltd.</p>
                  <p style={{color: "#9FA7BE", fontSize:"1.3em", width: "50%", margin:"auto", textAlign:"center"}}>I am a fullstack developer. I can provide clean code and pixel perfect design. I can make dynamic websites with firebase, nodejs, expressJs and all other modern javascript technologies like reactJs, reactNative etc. I can also integrate payment gateways like Paypal sslCommerz etc.</p>
                </header>
            </div>
            
           
              <LeftDrawer/>
            
          </div>
        
    </Router>
   
  );
}

export default App;

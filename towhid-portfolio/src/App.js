import React from 'react';
import './App.css';
import { AlertDismissible } from './components/navbar';
import Particles from 'react-particles-js';
import logo from './logo.svg'
import { Button } from '@material-ui/core';



function App() {
  return (
    <div className="App">
      
      <div>
          <Particles
            style={{backgroundColor: '#10121B', width:"100%", height:"100%"}}
            width="100vw"
            height="100vh"
            params={{

              particles: {
              
                color: {
                  value: "#ddd"
                },
                line_linked: {
                  color: {
                    value: "#222"
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
          <header style={{background: "transparent", position: "absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", width:"100%"}}>
            
            <h1 style={{color: "white", fontSize:"4em"}}> Hi, i am  <b style={{color:"#037BF9"}}> Md. Towhidul Islam</b> </h1>
            <p style={{color: "#9FA7BE", fontSize:"1.3em", width: "50%", margin:"auto", textAlign:"center"}}>I am a fullstack developer. I can provide clean code and pixel perfect design. I can make dynamic websites with firebase, nodejs, expressJs and all other modern javascript technologies like reactJs, reactNative etc. I can also integrate payment gateways like Paypal sslCommerz etc.</p>
          </header>
        </div>
    </div>
  );
}

export default App;

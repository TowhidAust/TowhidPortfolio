import React from 'react';
import './App.css';
import { AlertDismissible } from './components/navbar';
import Particles from 'react-particles-js';




function App() {
  return (
    <div className="App">
      
        <Particles
          style={{backgroundColor: 'black'}}
          params={{
            particles: {
            
              color: {
                value: "#fff"
              },
              line_linked: {
                color: {
                  value: "#fff"
                }
              },
              number: {
                value: 100
              },
              size: {
                value: 3
              }
            }
          }}
        />
        <header style={{background: "white", position: "absolute", top:"0%", width:"100%"}}>
          
          <AlertDismissible/>
        </header>
    </div>
  );
}

export default App;

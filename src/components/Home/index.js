import React, { Component } from 'react'
import LeftDrawer from "../Left_Drawer/left_drawer";
import Particles from 'react-particles-js';
import { CopyBlock, dracula } from "react-code-blocks";

export default class Home extends Component {
    componentDidMount(){

        // this.MyCoolCodeBlock();
    }

    MyCoolCodeBlock() {
        let code = `import React, { Component } from 'react'

        export default class Myself extends Component {
            render() {
                return (
                    <div>
                        <h3>Hi, I am Md. Towhidul Islam</h3>
                        <h3> Full Stack Software Engineer, 
                        Corona Engineering Ltd. <h3/>
                        <p>I am a fullstack developer.I can provide
                        clean code and pixel perfect design. I can 
                        make dynamic websites with firebase, nodejs,
                        expressJs and all other modern javascript
                        technologies like reactJs, reactNative etc.
                        I can also integrate payment gateways like
                        Paypal sslCommerz etc.</p>
                    </div>
                )
            }
        }
        `
        let language = "jsx"
        let showLineNumbers = true;
        return (
          <CopyBlock 
            text={code}
            language={language}
            showLineNumbers={showLineNumbers}
            theme={dracula}
          />
        );
      }

 

    render() {
        return (
            <div>
               <div className="particle_banner">
                    <LeftDrawer/>
                    <div className="particle_div">
                        <div className="collapse_icon" onClick={()=>{
                        alert('This is click alert');
                        }}>Collapse</div>
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
                                    value: 120
                                },
                                size: {
                                    value: 3
                                }
                                }
                                
                            }}
                            />
                            <header className="particle_contents">
                            
                            <h1 className="name"> Hi, i am  <b style={{color:"#037BF9"}}> Md. Towhidul Islam</b> </h1>
                            
                            <div style={{width:"50%", margin: "auto"}}>

                            {this.MyCoolCodeBlock()}
                            </div>
                            <p style={{color: "#9FA7BE", fontSize:"1.8em", width: "50%", margin:"auto", textAlign:"center"}}>Full Stack Software Engineer, Corona Engineering Ltd.</p>
                            <p style={{color: "#9FA7BE", fontSize:"1.3em", width: "50%", margin:"auto", textAlign:"center"}}>I am a fullstack developer. I can provide clean code and pixel perfect design. I can make dynamic websites with firebase, nodejs, expressJs and all other modern javascript technologies like reactJs, reactNative etc. I can also integrate payment gateways like Paypal sslCommerz etc.</p>
                            </header>
                    </div>
                        
                    
                    </div> 
            </div>
        )
    }
}

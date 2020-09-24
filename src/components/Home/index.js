import React, { Component } from 'react'
import Particles from 'react-particles-js';
import { CopyBlock, dracula } from "react-code-blocks";
import { FiFacebook } from 'react-icons/fi';
import {AiFillGithub} from 'react-icons/ai';
import {FiLinkedin} from 'react-icons/fi';
import "./home.css";

export default class Home extends Component {

    constructor(props){
        super(props);
        this.state = {date: new Date()}
    }
    
    componentDidMount(){

        // this.MyCoolCodeBlock();
    }

    MyCoolCodeBlock() {
        let code =`import React, { Component } from 'react'
 export default class Myself extends Component {
    render() {
        return (
            <div>
                <h3>Hi, I am Md. Towhidul Islam</h3>
                <h3> Full Stack Software Engineer, Corona Engineering Ltd. <h3/>
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
                                    value: 100,
                                    density: { 
                                        enable: false, 
                                        value_area: 500, 
                                      }
                                },
                                size: {
                                    value: 3
                                },
                                
                                move: {
                                    enable: true,
                                    speed: 1,
                                    direction: "none",
                                    random: true,
                                    straight: true,
                                    out_mode: "bounce",
                                    bounce: true,
                                    attract: {
                                        enable: true,
                                        rotateX: 3000,
                                        rotateY: 1500,
                                    }

                                }
                                }
                                
                            }}
                            />
                            <header className="particle_contents">
                            
                            <h1 className="name"> Hi, i am  <b style={{color:"#037BF9"}}> Md. Towhidul Islam</b> </h1>
                            
                            <div style={{width:"50%", margin: "auto"}}>
                            </div>
                            <p style={{color: "#9FA7BE", fontSize:"1.8em", width: "80%", margin:"auto", textAlign:"center"}}>Full Stack Software Engineer, Corona Engineering Ltd.</p>
                            <p style={{ color: "#9FA7BE", fontSize: "1.3em", width: "80%", margin: "auto", textAlign: "center" }}>I am a fullstack developer. I can provide clean code and pixel perfect design. I can make dynamic websites and hybrid mobile apps with firebase, nodejs, expressJs and other modern javascript technologies like reactJs, reactNative etc. I can also integrate payment gateways like Paypal, sslCommerz etc. I also keep myself updated with latest technologies and frameworks.</p>

                            <div className="socialIcons">

                                
                                <a className="fbIconAnchor" href="https://www.facebook.com/towhidulislam.007/" target="_blank" rel="noopener noreferrer">
                                <FiFacebook className="fbIcon"/>
                                </a>
                                
                                <a className="fbIconAnchor" href="https://github.com/TowhidAust" target="_blank" rel="noopener noreferrer">
                                <AiFillGithub className="fbIcon"/>
                                </a>

                                <a className="fbIconAnchor" href="https://www.linkedin.com/in/md-towhidul-islam-951988160/" target="_blank" rel="noopener noreferrer">
                                <FiLinkedin className="fbIcon"/>
                                </a>
                            </div>
                            
                            </header>
                    </div>
                        
                    
                    </div> 
            </div>
        )
    }
}

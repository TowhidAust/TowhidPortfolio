import React, { Component } from 'react'
import Particles from 'react-particles-js';
import { CopyBlock, dracula } from "react-code-blocks";
import { FiFacebook } from 'react-icons/fi';
import { AiFillGithub } from 'react-icons/ai';
import { FiLinkedin } from 'react-icons/fi';
import "./home.css";
import { CircularProgress } from '@material-ui/core';
import { FaPencilAlt } from 'react-icons/fa';
import { database } from '../../firebase';
import CircleAnimation from '../CircleAnimation';

export default class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            isDataLoaded: false,
            isUserLoggedIn: false,
        }
    }
    
    componentDidMount(){

        // this.MyCoolCodeBlock();
        this.getDataFromDatabase();
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
    
    getDataFromDatabase() {
        database.ref('/').once('value').then(snapshot => {
            // let snapshotVal = snapshot.val();
            let name = snapshot.val().home.name;
            let position = snapshot.val().home.position;
            let subtitle = snapshot.val().home.subtitle;
            let isUserLoggedIn = snapshot.val().isUserLoggedIn;
            this.setState({
                name: name,
                position: position,
                subtitle: subtitle,
                isDataLoaded: true,
                isUserLoggedIn: isUserLoggedIn
            })
        }).catch(err => console.log(err));
    }


    loadEditIcons() {
        if (this.state.isUserLoggedIn) {
            return (
                <>
                    <FaPencilAlt style={{cursor:"pointer"}}/>
                </>
            )
        }
    }

 

    render() {
        if (this.state.isDataLoaded) {
            return (
               
                <div className="particle_banner">
                    
                        <div className="particle_div">
                            
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
                                
                                <h1 className="name"> Hi, i am  <b style={{color:"#037BF9"}}> {this.state.name} </b> </h1>
                                
                                <div style={{width:"50%", margin: "auto"}}>
                                </div>
                                    <p style={{ color: "#9FA7BE", fontSize: "1.8em", width: "80%", margin: "auto", textAlign: "center" }}>{this.state.position} {this.loadEditIcons()}                                </p>
                                    <p style={{ color: "#9FA7BE", fontSize: "1.3em", width: "80%", margin: "auto", textAlign: "center" }}>{this.state.subtitle} {this.loadEditIcons()} </p>
    
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
              
            )
            
        } else {
            return (
                <div className="spinnerCss">
                    <CircleAnimation/>
                    <CircularProgress />
                    <div>Please Wait..</div>
                </div>
            )
        }
    }
}

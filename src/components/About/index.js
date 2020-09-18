import React, { Component } from 'react'
import { CodeBlock, dracula } from "react-code-blocks";
import "./about.css";

export default class About extends Component {
    constructor(props){
      super(props);
      this.state = {
        isDataLoaded : false
      }
    }
    componentDidMount(){
     
    }
    
    MyCoolCodeBlock() {
let code =
`import React, { Component } from 'react'
export default class Myself extends Component {
    render() {
        return (
          <div>
            <p>I am a full stack web & 
            hybrid mobile app developer.</p>
          </div>
        )
      }
    }
        `
        let language = "jsx"
        let showLineNumbers = true;
        return (
          <CodeBlock
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
            <div className="AboutContainer">
              <div className="aboutContents">
                <div className="aboutContentsInner">

                  <div className="aboutHeadingContainer">
                    <h1 className="aboutHeading">About Me</h1>
                    <hr/>
                  </div>
                
                  <div className="aboutMeAndDetailsCont">
                    <div className="aboutMeImage">
                      <img alt="myImage" className="ownImage" src="http://chester.nuclearthemes.com/images/about-image.jpg" />
                    </div>

                    <div className="aboutMe">
                      {this.MyCoolCodeBlock()}
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
            </div>
        )
    }
}

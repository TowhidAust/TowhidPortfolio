import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
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
      console.log("component did mount triggers", this.state);
      this.setState({
        isDataLoaded: true
      })
      console.log("isdata loaded", this.state.isDataLoaded);


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
    if (this.state.isDataLoaded = false) {
      return (
        <div>
          <p>The state is empty</p>
          </div>
        )
    } else {
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
                    <h1 className="aboutMeName">Hi, I am Md. Towhidul Islam</h1>
                    <p>I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.</p>
                    <p>FullName &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: Md. Towhidul Islam</p>
                    <p>Age&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 26</p>
                    <p>Nationality&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: Bangladesh</p>
                    <p>Address&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: Dhanmondi,15, Dhaka-1209</p>
                    <div className="cvDownloadButton"><Button variant="primary" block> DOWNLOAD CV</Button></div>

                  </div>
                </div>
                
              </div>
            </div>
          </div>
          </div>
      )
      
      }
    }
}

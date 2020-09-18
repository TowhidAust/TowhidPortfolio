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
        let code = `console.log('Hi this is towhid');
        for(let i =0; i<=10; i++){
            console.log("this is for loop");
        }
        `
        let language = "javascript"
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
                  <h1 className="aboutHeading">About Me</h1>
                  <hr/>
                  <div className="aboutMeImage">
                    <img className="ownImage" src="https://koolinus.files.wordpress.com/2019/03/avataaars-e28093-koolinus-1-12mar2019.png" />
                  </div>
                  {this.MyCoolCodeBlock()}
                </div>
              </div>
            </div>
            </div>
        )
    }
}

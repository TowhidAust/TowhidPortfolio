import React, { Component } from 'react'
import { CodeBlock, dracula } from "react-code-blocks";

export default class About extends Component {

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
                <h3>This is about page</h3>
                {this.MyCoolCodeBlock()}
            </div>
        )
    }
}

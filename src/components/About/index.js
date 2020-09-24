import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from "@fortawesome/free-solid-svg-icons";
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
    if (this.state.isDataLoaded === false) {
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
                    <img alt="myImage" className="ownImage" src="https://scontent.fdac99-1.fna.fbcdn.net/v/t1.0-9/104769815_3021715104586892_4985599325527377232_o.jpg?_nc_cat=109&_nc_sid=174925&_nc_eui2=AeGoWScu5iLBUFI1fLwh0dFzw4VutkH7IDnDhW62QfsgObXRlz2fnrJLbBPzPlXx8oE04MtpxQUp4hUCys3as-7q&_nc_ohc=3oHvNWaTv_YAX9S-W_4&_nc_ht=scontent.fdac99-1.fna&oh=8379931a2a385a85fbeb31a05e784cd8&oe=5F908F3C" />
                  </div>

                  <div className="aboutMe">
                    <h1 className="aboutMeName">I am <span> Md. Towhidul Islam</span></h1>
                    <p> I have experience with almost 2 years. Worked with latest javascript and it's frameworks. I am a javascript lover. I follow all the software stacks with javascript and it's frameworks. In future i want to move on to machine learning and AI with tensorflow and python. </p>
                    
                    <p>Nationality&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: Bangladeshi</p>
                    <p>Address&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: Dhanmondi,15, Dhaka-1209</p>
                    <p>Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: towhidaustcse33@gmail.com</p>
                    <p>Phone&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 01737010194</p>
                    <div className="cvDownloadButton"><Button variant="primary" block> DOWNLOAD CV</Button></div>

                  </div>
                </div>
                
                <section className="serviceSection">

                  <div className="servicesHeader">
                    <h1>Services</h1>
                    <hr/>
                  </div>

                  <div className="serviceContents">
                    <div className="s_WebDesign">
                    <FontAwesomeIcon icon={faCode} color="#037BF9" />
                      <h3>Web Design</h3>
                      <hr />
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.</p>
                    </div>

                    <div className="s_WebDevelopment">
                      <FontAwesomeIcon icon={faCode} color="#037BF9" />
                      <h3>Web Development</h3>
                      <hr />
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.</p>
                    </div>

                    <div className="s_MobileAppDevelopment">
                      <FontAwesomeIcon icon={faCode} color="#037BF9" />
                      <h3>Mobile App</h3>
                      <hr />
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.</p>
                    </div>
                  </div>

                </section>
              </div>
            </div>
          </div>
          </div>
      )
      
      }
    }
}

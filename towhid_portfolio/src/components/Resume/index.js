import React, { Component } from 'react';
import './resume.css';
import LinearProgress from '@material-ui/core/LinearProgress';
export default class Resume extends Component {
    render() {
        return (
            <div className="resumeContainer">
                <div className="resumeInner">
                    <section className="mySkillsSection">
                        <div className="skillHeadingCont">
                            <h1 className="mySkillsHeading">My Skills</h1>
                            <hr/>
                        </div>
                        <div className="skillDetails">
                            <div className="skills">
                                <span>HTML5</span>
                                <LinearProgress variant="buffer" value='90' valueBuffer= '95' />
                            </div>

                            <div className="skills">
                                <span>CSS3</span>
                                <LinearProgress variant="buffer" value='90' valueBuffer= '95' />
                            </div>

                         
                            <div className="skills">
                                <span>BOOTSTRAP4</span>
                                <LinearProgress variant="buffer" value='90' valueBuffer= '95' />
                            </div>

                            <div className="skills">
                                <span>JQUEY</span>
                                <LinearProgress variant="buffer" value='90' valueBuffer= '95' />
                            </div>
                        
                            <div className="skills">
                                <span>D3JS</span>
                                <LinearProgress variant="buffer" value='90' valueBuffer= '95' />
                            </div>
                            <div className="skills">
                                <span>WEBPACK</span>
                                <LinearProgress variant="buffer" value='90' valueBuffer= '95' />
                            </div>
                            <div className="skills">
                                <span>JAVASCRIPT</span>
                                <LinearProgress variant="buffer" value='90' valueBuffer= '95' />
                            </div>
                            <div className="skills">
                                <span>FIREBASE</span>
                                <LinearProgress variant="buffer" value='90' valueBuffer= '95' />
                            </div>
                            <div className="skills">
                                <span>NODEJS</span>
                                <LinearProgress variant="buffer" value='90' valueBuffer= '95' />
                            </div>
                            <div className="skills">
                                <span>EXPRESSJS</span>
                                <LinearProgress variant="buffer" value='90' valueBuffer= '95' />
                            </div>
                            <div className="skills">
                                <span>GIT</span>
                                <LinearProgress variant="buffer" value='90' valueBuffer= '95' />
                            </div>
                            <div className="skills">
                                <span>JSON</span>
                                <LinearProgress variant="buffer" value='90' valueBuffer= '95' />
                            </div>
                            <div className="skills">
                                <span>REST API</span>
                                <LinearProgress variant="buffer" value='90' valueBuffer= '95' />
                            </div>
                            <div className="skills">
                                <span>PAYMENT GATEWAY INTEGRATION, SSL COMMERZ, PAYPAL ETC.</span>
                                <LinearProgress variant="buffer" value='90' valueBuffer= '95' />
                            </div>

                            <div className="skills">
                                <span>REACT JS</span>
                                <LinearProgress variant="buffer" value='90' valueBuffer= '95' />
                            </div>
                            <div className="skills">
                                <span>REACT NATIVE</span>
                                <LinearProgress variant="buffer" value='90' valueBuffer= '95' />
                            </div>
                            <div className="skills">
                                <span>MATERIAL UI</span>
                                <LinearProgress variant="buffer" value='90' valueBuffer= '95' />
                            </div>
                            <div className="skills">
                                <span>SERVER SIDE PROGRAMMING</span>
                                <LinearProgress variant="buffer" value='90' valueBuffer= '95' />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

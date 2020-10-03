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
                            <span>HTML</span>
                            <LinearProgress variant="buffer" value='95' valueBuffer= '95' />
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

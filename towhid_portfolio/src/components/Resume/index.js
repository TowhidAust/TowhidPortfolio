import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './resume.css';

export default class Resume extends Component {
    render() {
        return (
            <div className="resumeContainer">
                <div className="resumeInner">
                <Button variant="contained" color="primary">
                    Hello World
                </Button>
                </div>
            </div>
        )
    }
}

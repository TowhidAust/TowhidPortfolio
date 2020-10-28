import { CircularProgress } from '@material-ui/core';
import React, { Component } from 'react';
import CircleAnimation from '../CircleAnimation';
import './blog.css';

export default class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDataLoaded: false,
        }
    }
    componentDidMount() {
        this.setState({
            isDataLoaded:false,
        })
    }
    render() {
        if (this.state.isDataLoaded) {
            return (
                <>
                    <div className="blogContainer">
                        
                    </div>
                </>
            )  
        } else {
            return (
            <>
                <div className="spinnerCss">
                    <CircleAnimation/>
                    <CircularProgress/>
                    <div>This section is under development...</div>  
                </div>
            </>
        )
        }
        
    }
}

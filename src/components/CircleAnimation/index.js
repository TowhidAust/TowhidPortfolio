import React, { Component } from 'react';
import "./circleAnimation.css"

export default class CircleAnimation extends Component {
    render() {
        return (
            <>
                  
                <div className='circle xxlarge shade1'></div>
                <div className='circle xlarge shade2'></div>
                <div className='circle large shade3'></div>
                <div className='circle mediun shade4'></div>
                <div className='circle small shade5'></div>
       
            </>
        )
    }
}

import { CircularProgress } from '@material-ui/core';
import React, { Component } from 'react';
import CircleAnimation from '../CircleAnimation';
import './contact.css';


export default class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isDataLoaded: false,
        }
    }

    componentDidMount() {
        this.setState({
            isDataLoaded: true
        })
    }
    render() {
        if(this.state.isDataLoaded){
        return (
            <>
                <div className="contactSection">
                    <CircleAnimation/>

                    <div className="contactCard">
                        <div className="contactCardInner">

                        <div>  Emai: towhidaustcse33@gmail.com</div>
                        <div> Phone: 01737010194</div>
                        <div> Present Address: Dhanmondi.15 Dhaka</div>
                        <div> Permanent Address: Maizbari, Sarishabari, Jamalpur</div>
                    </div>        
                    </div>
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

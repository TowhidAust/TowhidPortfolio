import React, { Component } from 'react';
import './portfolio.css';
import portfolio1 from "../../assets/videos/port1.mp4";
import portfolio2 from "../../assets/images/edutechMobile.jpg";
import portfolio3 from "../../assets/images/edutechMobile2.jpg";
import portfolio4 from "../../assets/images/portfolioApp.PNG";
import CircleAnimation from '../CircleAnimation';
import { CircularProgress } from '@material-ui/core';

export default class Portfolio extends Component {
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
                <div className="portfolioContainer">
                    <CircleAnimation/>

                    <div className="protfolioHeading">
                        <h1>My Portfolio</h1>
                        <hr/>
                    </div>

                    <div className="portfolioDetails">
                        <div className="card_">

                            <div className="portfolioImage">
                                    <video autoPlay="true" loop>
                                        <source src={portfolio1} type="video/mp4" />
                                    </video>        
                            </div>
                            <h3>Edutech Web App</h3>
                            <hr />
                            <p>The most important part is frontend. I can code with beautiful design and animations. I also ensure responsiveness and browser compatibility. User friendly neat and clean design pattern with media queries keyframes and modern css animations.</p>
                        </div>

                        <div className="card_">

                            <div className="portfolioImage">
                                <img style={{width:"40%"}} src={portfolio2} alt="portfolio_image"/>        
                                <img style={{width:"40%"}} src={portfolio3} alt="portfolio_image"/>        
                            </div>
                            <h3>Edutech Mobile App</h3>
                            <hr />
                            <p>The most important part is frontend. I can code with beautiful design and animations. I also ensure responsiveness and browser compatibility. User friendly neat and clean design pattern with media queries keyframes and modern css animations.</p>
                        </div>

                       

                        <div className="card_">

                        <div className="portfolioImage">
                            <img src={portfolio4} alt="portfolio_image"/>        
                        </div>
                        <h3>Portfolio & Blog Site</h3>
                        <hr />
                        <p>The most important part is frontend. I can code with beautiful design and animations. I also ensure responsiveness and browser compatibility. User friendly neat and clean design pattern with media queries keyframes and modern css animations.</p>
                        </div>
                    </div>

                    
                </div>
            </>
            )
        } else {
            return(
                <>
                    <div className="spinnerCss">
                        <CircleAnimation/>
                        <CircularProgress />
                        <div>Please Wait..</div>  
                    </div>
                </>
            )
        }
    }
}

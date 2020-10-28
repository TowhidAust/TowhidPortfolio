import React, { Component } from 'react';
import './portfolio.css';

export default class Portfolio extends Component {
    render() {
        return (
            <>
                <div className="portfolioContainer">
                    <div className="protfolioHeading">
                        <h1>My Portfolio</h1>
                        <hr/>
                    </div>

                    <div className="portfolioDetails">
                        <div className="card_">

                        <div className="portfolioImage">
                            <img src="https://ourcodeworld.com/public-media/articles/articleocw-5d07e6b3790af.jpg" alt="portfolio_image"/>        
                        </div>
                        <h3>Web Design</h3>
                        <hr />
                        <p>The most important part is frontend. I can code with beautiful design and animations. I also ensure responsiveness and browser compatibility. User friendly neat and clean design pattern with media queries keyframes and modern css animations.</p>
                        </div>

                        <div className="card_">

                        <div className="portfolioImage">
                            <img src="https://ourcodeworld.com/public-media/articles/articleocw-5d07e6b3790af.jpg" alt="portfolio_image"/>        
                        </div>
                        <h3>Web Design</h3>
                        <hr />
                        <p>The most important part is frontend. I can code with beautiful design and animations. I also ensure responsiveness and browser compatibility. User friendly neat and clean design pattern with media queries keyframes and modern css animations.</p>
                        </div>

                        <div className="card_">

                        <div className="portfolioImage">
                            <img src="https://ourcodeworld.com/public-media/articles/articleocw-5d07e6b3790af.jpg" alt="portfolio_image"/>        
                        </div>
                        <h3>Web Design</h3>
                        <hr />
                        <p>The most important part is frontend. I can code with beautiful design and animations. I also ensure responsiveness and browser compatibility. User friendly neat and clean design pattern with media queries keyframes and modern css animations.</p>
                        </div>
                    </div>

                    
                </div>
            </>
        )
    }
}

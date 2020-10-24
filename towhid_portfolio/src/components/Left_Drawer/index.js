// import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import "./left_drawer.css";
import { FaBars } from 'react-icons/fa';
import logo from "../../towhid.png";




import React, { Component } from 'react'

export default class LeftDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDataLoaded: false,
      isActiveRoute: false,
      Home: false,
      About: false,
      Resume: false,
      Portfolio: false,
      Blog: false,
      Contact: false
    }
  }
  componentDidMount() {
    let route = window.location.pathname;
    this.setState({
      isActiveRoute: route,
      Home: false,
      About: false,
      Resume: false,
      Portfolio: false,
      Blog: false,
      Contact: false
    });
  }

  navigationClickHandler(state) {
    if (state === 'Home') {    
      this.setState({
        
        isActiveRoute: false,
        Home: true,
        About: false,
        Resume: false,
        Portfolio: false,
        Blog: false,
        Contact: false,
      });
    } else if (state === 'About') {
      this.setState({
        
        isActiveRoute: false,
        Home: false,
        About: true,
        Resume: false,
        Portfolio: false,
        Blog: false,
        Contact: false,
      });
    } else if(state === 'Resume'){
      this.setState({
 
        isActiveRoute: false,
        Home: false,
        About: false,
        Resume: true,
        Portfolio: false,
        Blog: false,
        Contact: false,
      });
    } else if (state === 'Portfolio') {
      this.setState({

        isActiveRoute: false,
        Home: false,
        About: false,
        Resume: false,
        Portfolio: true,
        Blog: false,
        Contact: false,
      });
    } else if (state === 'Blog') {
      this.setState({
  
        isActiveRoute: false,
        Home: false,
        About: false,
        Resume: false,
        Portfolio: false,
        Blog: true,
        Contact: false,
      });
    } else if (state === 'Contact') {
      this.setState({
    
        isActiveRoute: false,
        Home: false,
        About: false,
        Resume: false,
        Portfolio: false,
        Blog: false,
        Contact: true,
      });
    }
  }

  // Now set the active state according to route and onload
  activeStateHandler(state_) {
    if (state_ === 'Home') {
      if (this.state.Home || this.state.isActiveRoute === "/") {
        return 'active';
      }
    } else if (state_ === 'About') {
      if (this.state.About || this.state.isActiveRoute === "/About") {
        return 'active';
      }
    }
    else if (state_ === 'Resume') {
      if(this.state.Resume || this.state.isActiveRoute === "/Resume") {
        return 'active';
      }
    } else if (state_ === 'Portfolio') {
      if(this.state.Portfolio || this.state.isActiveRoute === "/Portfolio") {
        return 'active';
      }
    } else if (state_ === 'Blog') {
      if(this.state.Blog || this.state.isActiveRoute === "/Blog") {
        return 'active';
      }
    } else if (state_ === 'Contact') {
      if(this.state.Contact || this.state.isActiveRoute === "/Contact") {
        return 'active';
      }
     }
  }


  render() {
    return (
      <div className="left_drawer_container">
      <div className="collapseIcon">
          <div><FaBars/></div>
      </div>
          <div className="avatar_image_div">
            <div className="myImageAnchor">
                <img src={logo} alt="MyImage" className="myImage" />
            </div>
            <div style={{fontSize:"1.5em", width:"100%", textAlign:"center", marginTop:"3%"}}>
              <Link to={"/Login"} style={{color:"white", textDecoration:"none"}}>Admin</Link>
            </div>
          </div>
        <ul className="left_drawer_ul">
            <li><Link  className={`${this.activeStateHandler('Home')}`} onClick={()=>{this.navigationClickHandler('Home')}} to={"/"} >Home</Link></li>
            <li><Link className={`${this.activeStateHandler('About')}`} onClick={()=>{this.navigationClickHandler('About')}} to={"/About"}>About</Link></li>
            <li><Link className={`${this.activeStateHandler('Resume')}`} onClick={()=>{this.navigationClickHandler('Resume')}} to={"/Resume"}>Resume</Link></li>
            <li><Link className={`${this.activeStateHandler('Portfolio')}`} onClick={()=>{this.navigationClickHandler('Portfolio')}}  to={"/Portfolio"}>Portfolio</Link></li>
            <li><Link className={`${this.activeStateHandler('Blog')}`} onClick={()=>{this.navigationClickHandler('Blog')}} to={"/Blog"}>Blog</Link></li>
            <li><Link className={`${this.activeStateHandler('Contact')}`} onClick={() => { this.navigationClickHandler('Contact') }} to={"/Contact"}>Contact</Link></li>
        </ul>
       
        <div className="copyrightSection">&copy; Md. Towhidul Islam</div>
    </div>
    )
  }
}
import React from 'react';
import { Link } from 'react-router-dom';
import "./left_drawer.css";
import About from "../About";


export default function LeftDrawer() {
 

  return (
    
    <div  className="left_drawer_container">
        <div className="avatar_image_div">
          <a className="myImageAnchor" href="#">
            <img className="myImage" src="https://koolinus.files.wordpress.com/2019/03/avataaars-e28093-koolinus-1-12mar2019.png" />
          </a>
          </div>
        <hr/>
        <ul className="left_drawer_ul">
            <li><Link className="active" to={"/"}>Home</Link></li>
            <li><Link to="/">Portfolio</Link></li>
            <li><Link to={"/About"}>About</Link></li>
            <li><Link to="#">Blog</Link></li>
            <li><Link to="#">Techs</Link></li>
        </ul>
    </div>
  
  );
}
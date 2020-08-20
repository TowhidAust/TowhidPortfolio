import React from 'react';
import "./left_drawer.css";


export default function LeftDrawer() {
 

  return (
    
    <div  className="left_drawer_container">
        <div className="avatar_image_div"><img src="https://koolinus.files.wordpress.com/2019/03/avataaars-e28093-koolinus-1-12mar2019.png" /></div>
        <hr/>
        <ul className="left_drawer_ul">
            <li><a href="/">Home</a></li>
            <li><a href="/">Portfolio</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Blog</a></li>
            <li><a href="/">Techs</a></li>
        </ul>
    </div>
  
  );
}
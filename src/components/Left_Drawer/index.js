import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import "./left_drawer.css";


export default function LeftDrawer() {
  
  const [isActive, setstate] = useState({
    isActiveRoute: "/",
    Home: true,
    About: false
  })

  useEffect(() => {
    console.log("useEffect triggers");
    let route = window.location.pathname;
    setstate({...isActive, Home: false, About: false, isActiveRoute: route});
    console.log(route);
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function clickHandlerHome(){
    setstate({...isActive, Home: true, About: false, isActiveRoute: false});
  }



  function clickHandlerAbout(){
    setstate({...isActive, Home: false, About: true, isActiveRoute: false});
  }

  function activeStateHomeHandler(){
    if(isActive.Home){
      return "active"
    }
  }

  function activeStateAboutHandler(){
    if(isActive.About){
      return "active"
    }
  }

  function activeStateHomeAccordingToRoute(){
    if(isActive.isActiveRoute === "/"){
      return "active"
    }
  }

  function activeStateAboutAccordingToRoute(){
    if(isActive.isActiveRoute === "/About"){
      return "active"
    }else{
      
    }
  }

  return (
    
    <div  className="left_drawer_container">
        <div className="avatar_image_div">
          <div className="myImageAnchor">
            <img alt="MyImage" className="myImage" src="https://koolinus.files.wordpress.com/2019/03/avataaars-e28093-koolinus-1-12mar2019.png" />
          </div>
          </div>
        <hr/>
        <ul className="left_drawer_ul">
            <li><Link  className={`${activeStateHomeAccordingToRoute()} ${activeStateHomeHandler()}`} onClick={()=>{clickHandlerHome()}} to={"/"} >Home</Link></li>
            <li><Link className={`${activeStateAboutAccordingToRoute()} ${activeStateAboutHandler()}`} onClick={()=>{clickHandlerAbout()}} to={"/About"}>About</Link></li>
            <li><Link to="/">Portfolio</Link></li>
            <li><Link to="/">Blog</Link></li>
            <li><Link to="/">Techs</Link></li>
        </ul>
    </div>
  
  );
}
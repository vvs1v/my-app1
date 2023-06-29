import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import '../style.css'
import logo from "../images/logo2.png"
import logo2 from "../images/house-solid.svg"
import logo3 from "../images/cloud-solid.svg"

import Cloud from "./Cloud"
import About from "./About"
import Home1 from "./Home1"
import InfoIcon from '@mui/icons-material/Info';
import ApprovalIcon from '@mui/icons-material/Approval';
import HomeIcon from '@mui/icons-material/Home';



function SidebarList(){

  const Link = ({ href, children }) => {
    const currentPath = window.location.pathname;
    console.log(href,children)
    const darkerColor = currentPath === href ? 'darker' : 'black';
  
    return (
      <a
        href={href}
        style={{ color: darkerColor }}
        css={`
          text-decoration: none;
        `}
      >
        {children}
      </a>
      

      
    );
  };
  
    return (
        
        
         
          <ul style={{listStyle:'none'}}>
            <li style={{padding:'5px 0px'}}> <Link key={"/home"} href={"/home"} to="/Home1"><HomeIcon style={{fontSize:'large'}}/> Home</Link></li>
            
            <li style={{padding:'5px 0px'}}> <Link  key={"/"} href={"/"} to="/"><ApprovalIcon style={{fontSize:'large'}}/> Impress</Link></li>
            
            {/* <li style={{padding:'5px 0px'}}> <Link  key={"/Cloud"} href={"/Cloud"} to="/Cloud"><img style={{width:'20px'}}  src={logo3} alt=""/>  cloud </Link></li> */}
            <li style={{padding:'5px 0px'}}> <Link  key={"/About"} href={"/About"} to="/About"><InfoIcon style={{fontSize:'large'}}/>  About </Link></li>
            {/* <li style={{padding:'5px 0px'}} ><img style={{width:'20px'}}  src={logo2} alt=""/>  About </li> */}
            </ul>
  
            
   
     
    )
}

export default SidebarList;
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import '../style.css'
import logo from "../images/logo2.png"
import logo2 from "../images/house-solid.svg"
import logo3 from "../images/cloud-solid.svg"
import About from "./About"
import Cloud from "./Cloud"
import SidebarList from "./Sidebarlist"



function Sidebar(){
    return(
        <>
     <div style={{backgroundColor:'#E6E7FC',padding:'5px',borderRight:'1px solid #9CC2FC',height:'100%',display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'}}>
     <div>  <img className="logo_kpmg" src={logo} alt="logo" />
      <div className="List_Item">
        {/* <ul style={{listStyle:'none'}}>
            <li style={{padding:'5px 0px'}}> <img style={{width:'20px'}}  src={logo2} alt=""/> ImPress </li>
            <li style={{padding:'5px 0px'}}> <img style={{width:'20px'}}  src={logo3} alt=""/>  cloud </li>
            <li style={{padding:'5px 0px'}}> <img style={{width:'20px'}}  src={logo2} alt=""/>  About </li>
            {/* <li style={{padding:'5px 0px'}} ><img style={{width:'20px'}}  src={logo2} alt=""/>  About </li> */}
        {/* </ul> */} 
        <SidebarList/>

      </div>
      </div>
      <div className="About">
      <div style={{backgroundColor:' rgba(0, 0, 0, 0.41)',border:'1px solid black',height:'40px',width:'100%'}}><h2>Insights</h2></div>
         <div style={{backgroundColor:'#fff',border:'1px solid black',height:'89%',width:'100%'}}>
            <ul><li>Apache Impala is a modern, open source, distributed SQL query engine for Apache Hadoop.</li>
                <li>Presto or PrestoDB is a distributed SQL query engine that is used best for running interactive analytic workloads in your big data environment.</li></ul>
         </div>
      </div>
     </div>

        </>
    )
}

export default Sidebar;
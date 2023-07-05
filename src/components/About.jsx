import React from "react";


import Header from "./Header.jsx"
import Sidebar from "./Sidebar.jsx";
import "../style.css"

import Body from "./Body.jsx";
import Footer from "./Footer.jsx";
import Testimonial2 from "./Testimonial2.jsx";

function About(){
    return(
        <>
        <div className="partion" >
        <div className="Part1">
        
        <Sidebar  />
        </div>
        <div className="Part2">
        <Header />
        <div >
        <Testimonial2/>
        </div>
        {/* <Footer/> */}
        </div>
               </div>
            </>
    )
}

export default About;
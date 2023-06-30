import React from "react";


import Header from "./Header.jsx"
import Sidebar from "./Sidebar.jsx";
import '../style.css'

import Body from "./Body.jsx";
import Footer from "./Footer.jsx";
import TestimonialPage from "./Testimonials.jsx"

function About(){
    return(

        <>
        <div className="partion" >
        <div className="Part1">
        
        <Sidebar />
        </div>
        <div className="Part2">
        <Header />
        <div style={{backgroundColor:'#E6E7FC', borderTop: '1px solid #9CC2FC'}}>
        {/* <p>Lorem ipsum dolor sit amet. A dolorum placeat est voluptatem inventore quo libero molestias ea dolorum commodi. Est voluptatem enim et optio quas aut dignissimos porro sed ipsum soluta ut doloribus tempora. Et nostrum voluptas et nesciunt odio eos laborum consequatur et provident velit qui nobis facilis vel magnam dignissimos et quia explicabo.</p> */}
          <TestimonialPage/>
        </div>
        <Footer />
        </div>
               </div>
            </>
          );
        }
        
    

export default About;
import React from "react";


import Header from "./Header.jsx"
import Sidebar from "./Sidebar.jsx";
import "../style.css"

import Body from "./Body.jsx";
import Footer from "./Footer.jsx";

function Cloud(){
    return(
        <>
        <div className="partion" >
        <div className="Part1">
        
        <Sidebar />
        </div>
        <div className="Part2">
        <Header />
        <div className="Body">
        <p>Lorem ipsum dolor sit amet. A dolorum placeat est voluptatem inventore quo libero molestias ea dolorum commodi. Est voluptatem enim et optio quas aut dignissimos porro sed ipsum soluta ut doloribus tempora. Et nostrum voluptas et nesciunt odio eos laborum consequatur et provident velit qui nobis facilis vel magnam dignissimos et quia explicabo.</p>

        </div>
        <Footer />
        </div>
               </div>
            </>
    )
}

export default Cloud;
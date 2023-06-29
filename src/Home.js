import React from "react";
import Header from "./components/Header.jsx"
import Sidebar from "./components/Sidebar.jsx";
import './style.css'

import Body from "./components/Body.jsx";
import Footer from "./components/Footer.jsx";
import axios from 'axios';


function Home() {
  return (
    <>
<div className="partion" >
<div className="Part1">

<Sidebar />
</div>
<div className="Part2">
<Header />
<Body />
<Footer />
</div>
       </div>
    </>
  );
}

export default Home;

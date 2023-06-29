import React from "react";


import Header from "./Header.jsx"
import Sidebar from "./Sidebar.jsx";
import "../style.css"

import Body from "./Body.jsx";
import Footer from "./Footer.jsx";
import {
    Container,
    Typography,
    Grid,
  } from '@material-ui/core';

function Home1(){
    return(
        <>
        <div className="partion" >
        <div className="Part1">
        
        <Sidebar />
        </div>
        <div className="Part2">
        <Header />
        <div className="Body">
        <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h2" className="body2">Impress</Typography>
          <p> Elevate your data-driven decision-making with ImPress, empowering you to seamlessly translate and execute complex impala queries into presto queries , maximizing productivity and ROI.</p>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3" style={{color:'#844CD6'}}>Impala</Typography>
          <p>As a component of the Apache Hadoop ecosystem, Impala brings interactive , SQL-like querying capabilities  to process data stored in Hadoop Distributed File System (HDFS) or Apache HBase</p>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3" style={{color:'#844CD6'}}>Presto</Typography>
          <p> Presto is an open-source distributed SQL query engine designed for fast and interactive  analytics on various data sources, including Hadoop, relational databases and cloud storage.</p>
        </Grid>
      </Grid>
    </Container>

        </div>
        <Footer />
        </div>
               </div>
            </>
    )
}

export default Home1;
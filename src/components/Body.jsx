import React, { useState } from 'react';
import "../style.css"
import logo2 from "../images/impala.png"
import logo3 from "../images/presto.png"
import Quote from './Quote'
import CodeEditor from "./CodeEditor";
import axios from 'axios';





function Body(){


    const [code, setCode] = useState('');
    const [result, setResult] = useState('');
    const[value1,setValue1] = useState('grey')
    
  
    const handleCodeChange = (e) => {
      setCode(e.target.value);
    };
  
    const sendDataToPython = async () => {
      try {
        const response = await axios.post('http://localhost:5000/process', { data: code });
        // console.log("The data is ",response.data.result[1])
        setResult(response.data.result);
        response.data.result[1]?setValue1('red'):setValue1('black')
      } catch (error) {
        console.error(error);
      }
    };





    return <div className="Body">
        <div className="griditem body1">
            <h1 style={{fontSize:'70px',fontWeight:'700'}}>ImPress Tool</h1>
            <h3>Make your life Simple</h3>
        </div>
        <div className="griditem" style={{position:'relative'}}>

            <Quote />
        </div>
        <div className="griditem box">
            <div className="container">
               
                <div className="container2" style={{gridColumn:'span 2'}}>
                           <h1>Impala to Presto</h1>
                </div>
                        <div className="container2"><img className="impala" src={logo2} alt="impala"/></div>

                        <div className="container2"><img className="presto" src={logo3} alt="presto"/></div>

                        <div className="container2 extra">
                            <div>
                                <textarea
                                  style={{ width: '99%', resize: 'none', outline: 'none' }}
                                  value={code}
                                  onChange={handleCodeChange}
                                  rows={20}
                                  placeholder="Enter your code here..."
                                />
                            </div>
                        </div>
                        <div className="container2 extra" style={{background:'white',padding:'5px'}}>
                        {/* <CodeEditor /> */}
                        <p style={{color:value1}}>{!result ?"Your result will show up here" : result}</p>
                        </div> 
                        <div className="container2"></div>
                
                
            </div>
        </div>
        <div className="griditem"><button className="click"   onClick={sendDataToPython}>Click To Translate</button></div>
        <div className="griditem"></div>
    </div>

}

export default Body;
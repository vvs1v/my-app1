import React from "react";
import "../style.css"
import FavoriteIcon from '@mui/icons-material/Favorite';
function Footer(){
  return  <div className="footer">
           <div className="dive 1" > <h1>Event</h1>
           <h4>Meet with dev Group</h4>
           <h6>Sat,August1/5-6pm</h6></div>
           <div className="dive 2"><h4 style={{marginTop:'17%'}}>Meet with dev Group</h4>
           <h6>Sat,August1/5-6pm</h6></div>
           <div className="dive 3"></div>
           {/* <div className="dive 4"  style={{ display: 'flex',justifyContent:'center',alignItems:"flex-end"}}><p>Made with  <FavoriteIcon style={{fontSize:'small',color:'red'}}/> by kpmg</p></div> */}
           {/* <div className="dive 5" style={{justifyContent:'center'}}><p>MADE WITH LOVE AND PASSION</p></div> */}
           
    </div>
}

export default Footer;
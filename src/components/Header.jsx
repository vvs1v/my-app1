import react from 'react'
import '../style.css'
import logo3 from "../images/users-solid.svg"

function Header(){
//  const panel_Header={
  
//         width: '100%',
//         height: '40px',
//         backgroundColor: '#E6E7FC',
//         borderBottom: '1px solid #9CC2FC'
    
//  }

return(
    <>
<div className="panel_Header">
       <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-end'}}><button style={{backgroundColor:'#E6E7FC', border:'1px solid #E6E7FC',fontWeight:'700'}}>SignUp </button><img style={{    width: '20px',
    // border: '2px solid #666',
    borderRadius: '50%',marginRight:'10px'
}}  src={logo3} alt='user sign' /></div> 
        
</div>
    </>
)
}
export default Header;
import { useState } from "react";
import { Link } from "react-router-dom";

const Header =()=>{
  const [log_btn, setlog_btn]= useState("Login");
    return(
    <div className='Header'>
      <div className='logo'>
        <img src="logo.png" 
        alt="logo" />
      </div>
     
      <div className='nav-item'>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contactus'>Contact us</Link></li>
          <li>Cart</li>
         <button className="log-btm" onClick={()=>{ log_btn === "Login" ? setlog_btn("Logout"): setlog_btn("Login")}}>{log_btn}</button>

  
        </ul>
      </div>
    </div>
  )
  }

  export default Header;
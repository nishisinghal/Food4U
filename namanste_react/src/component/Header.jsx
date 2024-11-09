import { useState } from "react";

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
          <li>Home</li>
          <li>About</li>
          <li>Contact us</li>
          <li>Cart</li>
         <button className="log-btm" onClick={()=>{ log_btn === "Login" ? setlog_btn("Logout"): setlog_btn("Login")}}>{log_btn}</button>

  
        </ul>
      </div>
    </div>
  )
  }

  export default Header;
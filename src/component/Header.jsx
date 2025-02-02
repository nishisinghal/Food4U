import { useState} from "react";
import { Link } from "react-router-dom";
import useonlinestatus from "../utils/useonlinestatus";
import Grocery from "./Grocery";

const Header =()=>{
  const [log_btn, setlog_btn]= useState("Login");
  const onlinestatus=useonlinestatus();
  
    return(
    <div className='Header'>
      <div className='logo'>
       <h1><b> CraveIt</b></h1>
      </div>
    
      <div className='nav-item'>
        <ul>
          <li> online status:{onlinestatus ? "✅" : "🔴"} </li>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contactus'>Contact us</Link></li>
          <li><Link to='/grocery'>Grocery</Link></li>
          <li>Cart</li>
         <button className="log-btm" onClick={()=>{ log_btn === "Login" ? setlog_btn("Logout"): setlog_btn("Login")}}>{log_btn}</button>

  
        </ul>
      </div>
    </div>
  )
  }

  export default Header;
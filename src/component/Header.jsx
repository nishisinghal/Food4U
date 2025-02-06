import { useState} from "react";
import { Link } from "react-router-dom";
import useonlinestatus from "../utils/useonlinestatus";
import Grocery from "./Grocery";
import '../App.css'


const Header =()=>{
  const [log_btn, setlog_btn]= useState("Login");
  const onlinestatus=useonlinestatus();
  
    return(
    <div className='flex justify-between bg-pink-300  mb-2 '>
      <div className='logo'>
       <h1><b> CraveIt</b></h1>
      </div>
    
      <div className=' flex nav-items items-center'>
        <ul className="flex gap-5 mr-2  ">
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
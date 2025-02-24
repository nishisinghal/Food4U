import { useState , useContext} from "react";
import { Link } from "react-router-dom";
import useonlinestatus from "../utils/useonlinestatus";
import Grocery from "./Grocery";
import '../App.css'
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Header =()=>{
  const [log_btn, setlog_btn]= useState("Login");
  const onlinestatus=useonlinestatus();
  const {loggedInUser}= useContext(UserContext);
  const cart =useSelector((store)=>store.cart.items);

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
          <li className=""><Link to='/grocery'>Grocery</Link></li>
          <li className="px-4 font-bold text-xl">Cart ({ cart ? cart.length:0} items)</li>
         <button className="log-btm" onClick={()=>{ log_btn === "Login" ? setlog_btn("Logout"): setlog_btn("Login")}}>{log_btn}</button>
         <li className="font-bold">{loggedInUser}</li>

  
        </ul>
      </div>
    </div>
  )
  }

  export default Header;
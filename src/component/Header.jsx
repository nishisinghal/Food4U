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
    <div className='flex justify-between  mb-2 '>
      <div className='logo mx-10 text-orange-300'>
       <h1><b> CraveIt</b></h1>
      </div>
    
      <div className=' flex nav-items items-center'>
        <ul className="flex gap-5 mr-2  ">
          <li> online status:{onlinestatus ? "✅" : "🔴"} </li>
          <li><Link to='/'  className="no-underline text-black">Home</Link></li>
          <li><Link to='/about'  className="no-underline text-black">About</Link></li>
          <li><Link to='/contactus' className="no-underline text-black">Contact us</Link></li>
          <li className="px-4 font-bold text-xl"> <Link to ='/cart'  className="no-underline text-black" >Cart ({ cart ? cart.length:0} items)</Link></li>
         <button className="log-btm" onClick={()=>{ log_btn === "Login" ? setlog_btn("Logout"): setlog_btn("Login")}}>{log_btn}</button>
         <li className="font-bold">{loggedInUser}</li>

  
        </ul>
      </div>
    </div>
  )
  }

  export default Header;
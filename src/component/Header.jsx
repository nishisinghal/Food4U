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
      <div className='logo mx-10 font-bold fomt-serif text-red-500 '>
       <h1><b> Food4U </b></h1>
      </div>
    
      <div className= "flex nav-items justify-center ">
        <ul className="flex gap-40 mr-4 30px solid black margin-5px">
        
          <li><Link to='/'  className=" text-black font-bold text-xl">Home</Link></li>
          <li><Link to='/about'  className=" text-black font-bold text-xl">About</Link></li>
          <li><Link to='/contactus' className=" text-black font-bold text-xl">Contact us</Link></li>
          <li className="px-4 font-bold text-xl"> <Link to ='/cart'  className="no-underline text-black" >Cart ({ cart ? cart.length:0} items)</Link></li>
         {/* <button className="log-btm" onClick={()=>{ log_btn === "Login" ? setlog_btn("Logout"): setlog_btn("Login")}}>{log_btn}</button> */}
         <li><Link to='/Login' className="loginform">LogIn</Link> </li>

  
        </ul>
      </div>
    </div>
  )
  }

  export default Header;
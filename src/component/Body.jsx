import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import Search_Button from "./Search_Button";
import Resto_cart from "./Restocart";
import { Link } from "react-router-dom";
import useonlinestatus from "../utils/useonlinestatus";
import UserContext from '../utils/UserContext'




const Body = () =>{
  
  const { setUsername , loggedInUser } = useContext (UserContext);

    const [listofrest, setlistofrest] = useState([]);
    const [filteredlist, setfilteredlist]= useState([]);
    const Fetchdata =async ()=>{
      const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.2138156&lng=75.8647527&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");    
      const json = await data.json();
      
     setlistofrest(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
     setfilteredlist(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  
          
    }
  
    
    useEffect(()=>{Fetchdata()}, []);
    console.log(filteredlist[0]?.info?.id);
    
    if(useonlinestatus() === false) return (<h1>Plese check your internet connection...</h1>)
    
    return listofrest.length === 0 ? <Shimmer /> : (
    <>
    <div className="body">
      <div>
  
      <Search_Button listofrest={listofrest} 
              setfilteredlist={setfilteredlist} ></Search_Button>
      <button className='flex p-1 border-2 m-2 bg-fuchsia-200 hover:bg-black hover:text-pink-400  ' onClick={()=>{
        const topratefilter = listofrest.filter((res) => res.info.avgRating > 4);
        setfilteredlist(topratefilter);
     }}>
       Top Rated Restaurant</button> 
       <label >UserName:</label>
       <input
        
        className="inputsearch border-2 "
        
        value={loggedInUser}
        onChange={(e) => setUsername(e.target.value)}
      />
  </div>
      <div className="Res_cart_conatiner flex flex-wrap gap-10 p-2 fill-black ">
      {/* { filteredlist.map ( restaurant => (<Resto_cart Resdata = {restaurant} />))} */}
      { filteredlist.map ( restaurant => (<Link to={"/resmenu/"+restaurant.info.id}><Resto_cart Resdata = {restaurant} /></Link>))}

      </div>
      </div>
  </>
  
    )}

    export default Body;
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import Search_Button from "./Search_Button";
import Resto_cart from "./Restocart";
import { Link } from "react-router-dom";
import useonlinestatus from "../utils/useonlinestatus";
import UserContext from '../utils/UserContext'
import HeroSection from "./HeroSection";
import Footer from "./Footer";



const Body = () =>{
  
  const { setUsername , loggedInUser } = useContext (UserContext);

    const [listofrest, setlistofrest] = useState([]);
    const [filteredlist, setfilteredlist]= useState([]);
    
     const Fetchdata = async () => {
  fetch("/api/restaurant")   
  .then((res) => res.json())
  .then((data) => {
    console.log(data); // check the API response
    setlistofrest(
      data?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredlist(
      data?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  })
  .catch((err) => console.error("Proxy fetch error:", err));

      
     setlistofrest(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
     setfilteredlist(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  
          
    }
  
    
    useEffect(()=>{Fetchdata()}, []);
    console.log(filteredlist[0]?.info?.id);
    
    if(useonlinestatus() === false) return (<h1>Plese check your internet connection...</h1>)
    
    return listofrest.length === 0 ? <Shimmer /> : (
    <>
    <div className="body w-10/12 m-auto">
    <div className="p-10">
      <HeroSection />
     </div>
      <div className="m-auto ">
   <div className="flex  justify-center ">
      <Search_Button listofrest={listofrest} 
              setfilteredlist={setfilteredlist} ></Search_Button>
      
       </div> 
       {/* <div className="p-6">
          <label >UserName:</label>
       <input
        
        className="inputsearch border-2 bg-white "
        
        value={loggedInUser}
        onChange={(e) => setUsername(e.target.value)}
      />
      </div>  */}
      
      <button className='flex p-1 border-2 m-2 hover:bg-white hover:text-pink-400 bg-white  ' onClick={()=>{
        const topratefilter = listofrest.filter((res) => res.info.avgRating > 4);
        setfilteredlist(topratefilter);
     }}>
       ⭐️Top Rated Restaurants</button> 
       
      
  </div>
      <h1 className=" border-0 text-center">Explore Restaurnt's in Bhopal</h1>
      <div className="Res_cart_conatiner flex flex-wrap gap-10 p-2 fill-black ">
      {/* { filteredlist.map ( restaurant => (<Resto_cart Resdata = {restaurant} />))} */}
      { filteredlist.map ( restaurant => (<Link to={"/resmenu/"+restaurant.info.id}><Resto_cart Resdata = {restaurant} /></Link>))}

      </div>
      </div>
      <Footer></Footer>
  </>
  
    )}

    export default Body;
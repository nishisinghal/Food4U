import React from 'react'
import { useState , useEffect} from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './component/Header'
import Body from './component/Body'






// const Body = () =>{
//   const [listofrest, setlistofrest] = useState([]);
//   const [filteredlist, setfilteredlist]= useState([]);
  

  
//   useEffect(()=>{Fetchdata()}, []);
//   const Fetchdata =async ()=>{
//     const data = await fetch(
//           "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.2138156&lng=75.8647527&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");    
//     const json = await data.json();
//     console.log(json);
//    setlistofrest(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
//    setfilteredlist(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

        
//   }
  
  
//   return listofrest.length === 0 ? <Shimmer /> : (
//   <>
//   <div className="body">
//     <div>

//     <Search_Button listofrest={listofrest} 
//             setfilteredlist={setfilteredlist} ></Search_Button>
//     <button className='btn_toprate' onClick={()=>{
//       const topratefilter = listofrest.filter((res) => res.info.avgRating > 4);
//       setfilteredlist(topratefilter);
//    }}>
//      Top Rated Restaurant</button>
// </div>
//     <div className="Res_cart_conatiner">
//     { filteredlist.map ( restaurant => <Resto_cart Resdata = {restaurant} />)}
//     </div>
//     </div>
// </>

//   )}
  



function App() {
  return (<>
    <Header />
    <Body />
    
    
    </>

  )
}

//export default App;

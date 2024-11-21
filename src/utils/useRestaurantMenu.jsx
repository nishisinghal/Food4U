import { useEffect, useState } from "react";
const useRestaurantMenu =(resId)=>{
    const [resInfo , setresInfo]= useState(0);
   
    useEffect(()=>{
  fetchdata(resId);

    })
    const fetchdata = async(resId)=>{
        const data = await fetch("https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.2138156&lng=75.8647527&restaurantId="+resId+"&submitAction=ENTER");
        const json = await data.json();
        setresInfo(json.data);
        

    }
    

   
   

    return resInfo;
}

export default useRestaurantMenu;
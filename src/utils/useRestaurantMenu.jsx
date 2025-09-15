import { useEffect, useState } from "react";
const useRestaurantMenu =(resId)=>{
    const [resInfo , setresInfo]= useState(0);
   
    useEffect(()=>{
  fetchdata(resId);

    })
    const fetchdata = async(resId)=>{
        const data = await fetch("/api/menu");
        const json = await data.json();
        setresInfo(json.data);
        

    }
    

   
   

    return resInfo;
}

export default useRestaurantMenu;
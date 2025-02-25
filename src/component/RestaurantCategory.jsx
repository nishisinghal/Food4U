import { useState } from "react";
import ItemList from "./ITemLIst";
const RestauratCategory=(data)=>{
    // console.log(data)
    const[ showitem,setshowitem]=useState(false);

    const handleclick=()=>{
      setshowitem(!showitem);
    };
    return<>
   <div className="text-center mx-auto my-4 w-6/12 bg-gray-200 shadow-lg p-4 " >
      <div className="flex justify-between" onClick={handleclick}>
      <span className="font-bold">{data.data.title}</span>
      <span>⬇️</span>
      </div>

      { showitem && <ItemList item= {data.data.itemCards} > </ItemList>}
      </div>
      
       
     
    </>
}

export default RestauratCategory;
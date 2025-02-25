import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
const ItemList=({item})=>{
// console.log("nmn:",item);
const dispatch = useDispatch();
const handleAddItem =(item)=>{
// Dispact an item usedispatch hook will be used to dispatch action
 console.log("NAMIHNuhBVYVYGBYGVYVYYU");
  dispatch(addItem(item))
}
return (<div>
   { item?.length>0 ?
    item.map((item)=>(
        <div className=" border-b-2 p-2 m-2 text-left flex justify-between bg-gray-200">
           <div className="w-9/12"> <div>
                <span className="font-bold">{item.card?.info.name}</span>
                <span> - ₹ {item.card?.info.price/100 ? item.card?.info.price/100 :item.card?.info.defaultPrice/100}</span>
            </div>
            <p className=" text-xs ">{<span>{item.card.info.description}</span>}</p>
            </div>
            <div className="w-3/12 p-3 h-44 "> 
              <div className=" absolute">
              <button className=" text-white bg-black rounded-2xl mx-16 " onClick={ ()=> handleAddItem(item)}>Add +</button>
              
            </div> 
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"+item.card.info.imageId }  alt=""  className=" w-44 h-32"/>
            </div>

        </div>
        
          

    )): 
        <p>No items available</p>
   }
</div>)
}
export default ItemList;
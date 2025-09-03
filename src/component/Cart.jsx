import { useSelector } from "react-redux";
import ItemList from "./ITemLIst";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

// import cartSLICE 
const Cart =()=>{
  
    const cartItems = useSelector((store)=>store.cart.items);
     const dispatch = useDispatch(); 
    const handelclear=()=>{
        dispatch(clearCart());
        console.log("khgcfyjcfygckycfyitc")
     }
    return(
       <div className="m-10 p-10 text-center ">
        <h1>Your Cart</h1>
           <div className=" w-6/12 m-auto">
           <ItemList item={cartItems}> </ItemList></div> 
           <button className=" bg-black text-white p-2 m-2  rounded-lg border-2px " onClick={handelclear}>Clear Cart</button>
           
           <button className="bg-black text-white m=2 p-2 border-2px" onClick={handelclear}>Order Now!</button>
        </div>
    )
}

export default Cart;
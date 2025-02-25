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
        <h1>cart</h1>
           <div className=" w-6/12 m-auto">
           <button className=" bg-black text-white p-1.5 m-2  rounded-lg border-2 border-amber-600 " onClick={handelclear}>Clear Cart</button>
           <ItemList item={cartItems}> </ItemList></div> 
        </div>
    )
}

export default Cart;
import { Link } from "react-router-dom";

const Resto_cart = (props) =>{
    const {Resdata} = props;
     
     return <>
     <div className="Res_card  gap-5 border-2  h-100 w-60 text-black p-1 bg-white rounded-2xl  shadow-2xl shadow-amber-100 " onClick={()=>{
      <Link to='/resmenu' className="no-underline"></Link>
      
     }}>
      
       <div className="Res_image w-full h-35 ">
        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ Resdata.info.cloudinaryImageId} alt="Pasta" className='h-full w-full object-cover rounded-2xl'/>
       </div>
       <div className="Res_info  no-underline bg-white text-black ">
         <h4 className="bg-white">{Resdata.info.name}</h4>
         <h6 className="bg-white">{Resdata.info.avgRating}⭐️{Resdata.info.deliveryTime}</h6>
         {/* <p className="bg-white">{Resdata.info.cuisines.join(". ")}</p> */}
         <p className="bg-white">📍{Resdata.info.areaName}</p>
   
       </div>
     </div>
   
     </>
   }

   export default Resto_cart;
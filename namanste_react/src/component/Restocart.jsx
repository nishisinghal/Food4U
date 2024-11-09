const Resto_cart = (props) =>{
    const {Resdata} = props;
   
     
     return <>
     <div className="Res_card">
       <div className="Res_image">
        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ Resdata.info.cloudinaryImageId} alt="Pasta" className='Res_card_image'/>
       </div>
       <div className="Res_info">
         <h4>{Resdata.info.name}</h4>
         <h6>{Resdata.info.avgRating} {Resdata.info.deliveryTime}</h6>
         <p>{Resdata.info.cuisines.join(". ")}</p>
         <p>{Resdata.info.areaName}</p>
   
       </div>
     </div>
    
     </>
   }

   export default Resto_cart;
import Shimmer from "./Shimmer";
import Menudetail from "./Menudetail"
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";


const RestaurantMenuPage = () => {
   
    const {resId}= useParams();
    const resInfo = useRestaurantMenu(resId);
    const restaurantinfo = resInfo?.cards?.[2]?.card?.card?.info || {};
    const menudetail=  resInfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card.card.itemCards || [];
    
    const { name,  id  , cuisines } = restaurantinfo;

    return resInfo === null ? <Shimmer />:(
        <>  <div className="restaurantmenu_container">
            <div className="menuresname">
                <h1>{name}</h1>
                <p>{id}</p>
                <div className="menu">
                    { menudetail.map( (res) => (<Menudetail menudetail = {res} />))}
                </div>
            </div>
            </div>
        </>
    );
};
export default RestaurantMenuPage;

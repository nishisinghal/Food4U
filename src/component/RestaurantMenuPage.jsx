import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory"; // Fixed typo

const RestaurantMenuPage = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);

    // Handle loading state
    if (!resInfo) return <Shimmer />; 

    // console.log("Restaurant Info:", resInfo); // Debugging log

    const restaurantinfo = resInfo?.cards?.[2]?.card?.card?.info || {};
    
    // Ensure REGULAR.cards exists before filtering
    const regularCards = resInfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
    
    const categories = regularCards
        ? regularCards.filter(
            (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        )
        : [];

    // console.log("Categories:", categories); // Debugging log

    const { name, id } = restaurantinfo;

    return (
        <>  <div className=" w-{70 text-center} bg-gray-300 ">
            <div className="resdetail text-center">
                <h1 className="font-bold my-6 text-2xl">{name}</h1> 
                <span>{id}</span>
            </div>
            <div>
                {categories.length > 0 ? (
                    categories.map((category, index) => (
                        <RestaurantCategory key={index} data={category?.card?.card}  showItems={false} />
                    ))
                ) : (
                    <p className="text-center">No categories available</p>
                )}
            </div>
            </div>
        </>
    );
};

export default RestaurantMenuPage;

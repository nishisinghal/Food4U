import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import Menudetail from "./Menudetail"
import { useParams } from "react-router-dom";

const RestaurantMenuPage = () => {
    const [resdata, setresdata] = useState(null);
    const {resId}= useParams();

    useEffect(() => {
        fetchdata();
    }, []);

    const fetchdata = async () => {
        const data = await fetch("https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.2138156&lng=75.8647527&restaurantId="+resId+"&submitAction=ENTER");
        const json = await data.json();
        setresdata(json.data);
        console.log("Fetched data:", json.data); // Log the data
    };

    const { name,  id  , cuisines } = resdata?.cards[2]?.card?.card?.info || {};
    const menudetail=  resdata?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card.card.itemCards || {};
    // console.log("ihdwb cuey2fdbc dei"+ resdata?.cards[5]);


    return resdata === null ? <Shimmer /> : (
        <>  
            <div className="menuresname">
                <h1>{name}</h1>
                <p>{id}</p>
                
                <div className="menu">
                
                { menudetail.map( (res) => (<Menudetail menudetail = {res} />))}
            </div>
            </div>
           
            
        </>
    );
};

export default RestaurantMenuPage;

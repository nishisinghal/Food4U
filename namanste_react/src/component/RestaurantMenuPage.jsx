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
                {/* <p>{cuisines[0]}</p> */}
                <div className="menu">
                {/* <p> Following menu </p>
                <Menudetail  menudetail={menudetail[0]}/> */}
                {/* {nmn.map(item => <li>{item.card.info.name}</li>)} */}
                { menudetail.map( (res) => (<Menudetail menudetail = {res} />))}
                {/* {menudetail.map((item, index) => (
                        <Menudetail key={index} menudetail={item} />
                    ))} */}


            </div>
            </div>
           
            
        </>
    );
};

export default RestaurantMenuPage;

import { useParams } from "react-router-dom";
const Menudetail = ( {menudetail} ) => {
    // Check if menudetail and itemcards exist before accessing the first item
    

    const {resId}= useParams();
    


    return (
    

        <>
            <div className="menu_cart">
                <div className="menucard">
                    <div className="veg_nonveg_ivon">
                        <p>{menudetail?.card?.info?.itemAttribute.vegClassifier}</p>
                    </div>
                    <div className="dishname">
                        <h3>{menudetail?.card?.info?.name}</h3>
                    </div>
                    <div className="price_offer">
                        <div className="menu_item_price">
                            <p>RS:{menudetail?.card?.info?.price/100}</p>
                        </div>
                        <div className="menu_item-tag"></div>
                        <div className="off_percentage">
                            {/* <p>{menudetail?.card?.info?.offerTags[0].title}</p> */}
                        </div>
                        <div className="offercode">
                            {/* <p>{menudetail?.card?.info?.offerTags[0].subTitle}</p> */}
                        </div>
                    </div>
                    <div className="Rating_container">
                        <p>*4.0(5)</p>
                    </div>
                    <div className="menu_item_description">
                        <p>{menudetail?.card?.info?.description}</p>
                    </div>
                </div>

                <div className="menu_img">
                    <div className="menu_image">
                    <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ menudetail?.card.info.imageId} alt="Pasta" className='Res_card_image'/>
      
                    </div>
                </div>
            </div>
        </>
    );
};
export default Menudetail;

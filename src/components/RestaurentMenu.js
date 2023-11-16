import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurentMenu = () => {
    const [resInfo, setResInfo] = useState();

    const { resId } = useParams();

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=" + resId + "&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    }

    if (resInfo === null) return (<Shimmer />);

    // const { name, avgRating, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;

    // const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    // console.log(itemCards)
    return (
        <div className="menu">
            <div>
                <h1>{resInfo?.cards[0]?.card?.card?.info?.name}</h1>
                <h3>{resInfo?.cards[0]?.card?.card?.info?.avgRating}</h3>
            </div>
            <p>{resInfo?.cards[0]?.card?.card?.info?.cuisines.join(" , ")}  ,   {resInfo?.cards[0]?.card?.card?.info?.costForTwoMessage}</p>

            <ul>
                {resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards.map((item) => <li key={item.card.info.id}>{item.card.info.name}  - {item.card.info.price / 100 || item.card.info.defaultPrice / 100}</li>)}
            </ul>
        </div>
    );
}
export default RestaurentMenu;
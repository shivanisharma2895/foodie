import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurentMenu = () => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=739040&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    }

    if (resInfo === null) return (<Shimmer />);

    const { name, avgRating, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;

    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards)
    return (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{avgRating}</h3>
            <p>{cuisines.join(" , ")}  ,   {costForTwoMessage}</p>

            <ul>
                <li>Biryani</li>
            </ul>
        </div>
    );
}
export default RestaurentMenu;
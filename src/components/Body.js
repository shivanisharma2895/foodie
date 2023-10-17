import { useEffect, useState } from "react";

import ResCard from "./ResCard";
import Shimmer from "./Shimmer";



const Body = () => {

    const [listedRestro, setListedRestro] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {

        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        setListedRestro(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    }

    return listedRestro.length === 0 ? <Shimmer /> : (
        <div className='body'>
            <div className='search-container'>
                <button onClick={() => {
                    const filterdList = listedRestro.filter((res) => res.info.avgRating > 4.1)
                    setListedRestro(filterdList);
                }}>Top Rated Restaurants</button>
            </div>
            <div className='res-container'>

                <div className='res-card'>
                    {listedRestro.map((resList) => (<ResCard key={resList.info.id} resData={resList} />))}

                </div>
            </div>
        </div>
    );
}
export default Body;  
import restaurants from "../utils/mockData";
import ResCard from "./ResCard";


const Body = () => {
    return (
        <div className='body'>
            <div className='search-container'>search</div>
            <div className='res-container'>
                <div className='res-card'>
                    {restaurants.map((resList) => (<ResCard key={resList.info.id} resData={resList} />))}

                </div>
            </div>
        </div>
    );
}
export default Body;  
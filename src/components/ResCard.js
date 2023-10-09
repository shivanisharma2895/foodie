import { CDN_URL } from "../utils/constant";

const ResCard = (props) => {
    const { resData } = props;
    const { name, cuisines, cloudinaryImageId, avgRating, costForTwo } = resData?.info;

    return (
        <div className='card'>
            <img className='res-logo' alt='' src={CDN_URL + cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
}

export default ResCard;
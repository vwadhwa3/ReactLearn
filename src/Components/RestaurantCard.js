import {CDN_URL} from "../utils/constants"

const RestaurantCard =(props) =>{
    
    const  {resData }= props
     const {cloudinaryImageId
        ,name
        ,cuisines
        ,avgRatingString
        ,costForTwo} = resData?.info
    return (
        <div className="res-card" style={{backgroundColor : "#f0f0f0"}}>
            <img className="res-logo" src={CDN_URL+cloudinaryImageId} alt="pizza"></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRatingString}</h4>
            <h4>{costForTwo}</h4>
        </div> 
    )
}

export default RestaurantCard
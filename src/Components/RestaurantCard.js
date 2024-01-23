import {CDN_URL} from "../utils/constants"

const RestaurantCard =(props) =>{
    
    const  {resData }= props
     const {cloudinaryImageId
        ,name
        ,cuisines
        ,avgRatingString
        ,costForTwo,
        locality} = resData?.info
    return (
        <div className="m-4 p-4 w-[320px] rounded-xl bg-gray-100 hover:bg-gray-200" >
            <img className="rounded-lg  h-[16rem] w-[300px]" src={CDN_URL+cloudinaryImageId} alt="pizza"></img>
            <h3 className="font-bold py-4">{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRatingString}</h4>
            <h4>{costForTwo}</h4>
            <h6>{locality}</h6>
        </div> 
    )
}

export const withIsOpenLable = (RestaurantCard) =>{
    
    return (props)=>{
        return(
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Open</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}



export default RestaurantCard
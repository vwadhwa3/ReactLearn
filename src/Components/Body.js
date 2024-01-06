import RestaurantCard  from "./RestaurantCard"
import  {restList} from "../utils/mockData"
import { useEffect, useState } from "react"


const Body= ()=>{
     const [listOfRestaurants,setlistOfRestaurants] =useState(null);
     useEffect (()=>{
        console.log("useEffect called")
        fetchData()
     },[])
     console.log("body rendered")

     const fetchData = async ()=>{
     const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5273336&lng=77.219241&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTI")
     const json =await data.json();
     console.log("card 4")
     console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[0].info)
     console.log("fetchData function")
     setlistOfRestaurants(await json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    }

    return (
                <div className="body" >
                        <div className="filter">
                            <button className="filter-btn" onClick={()=> {
                                
                                const filterList  = restList.filter( 
                                        (x) => x.info.avgRating > 4.3
                                        ) 
                            setlistOfRestaurants(filterList)
                            
                            }}>
                                Top Rated Restaurant
                            </button>
                        </div>
                        <div className="res-conatiner"> 
                        {
                            listOfRestaurants?.map(x => <RestaurantCard  key={x.info.id} resData={x} /> )
                        }
                        </div>
                </div>
            )
}

export default Body
import RestaurantCard  from "./RestaurantCard"
import  {restList} from "../utils/mockData"
import { useState } from "react"


const Body= ()=>{
     const [listOfRestaurants,setlistOfRestaurants] =useState(restList);
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
                            listOfRestaurants.map(x => <RestaurantCard  key={x.info.id} resData={x} /> )
                        }
                        </div>
                </div>
            )
}

export default Body
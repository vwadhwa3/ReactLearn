import RestaurantCard  from "./RestaurantCard"
import  {MENU_API} from "../utils/constants"
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"

const Body= ()=>{
     const [listOfRestaurants,setlistOfRestaurants] =useState([]);
     const [filterRestaurants,setFilterRestaurants] = useState([])
     useEffect (()=>{
        console.log("useEffect called")
        fetchData()
     },[])
     console.log("body rendered")

     const fetchData = async ()=>{ 
       
     //const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5273336&lng=77.219241&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTI")
     const data = await fetch (MENU_API)
     const json =await data.json();
     console.log("card 4")
     //debugger
    //console.log(json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants[0].info.locality)
     console.log("fetchData function")
    setlistOfRestaurants(await json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants)
    setFilterRestaurants(await json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants)
    }
    // if(listOfRestaurants.length === 0){
    //    return <Shimmer/>
    // }

    const [searchText, setSearchText] = useState("")

    return listOfRestaurants.length === 0 ? <Shimmer/> : (
                <div className="body" >
                        <div className="filter">
                                <div className="search"> 
                                    <input type="text" className="search-box" placeholder="find" value={searchText} onChange={(e)=> {
                                        setSearchText(e.target.value)
                                    }} />
                                    <button onClick={()=> {
                                        debugger
                                       console.log(searchText)
                                       const filterList  = listOfRestaurants.filter( 
                                        (x) => x.info.name.toLowerCase()
                                        .includes(searchText.toLowerCase())
                                        ) 
                                        console.log(filterList)
                                        setFilterRestaurants(filterList)
                                         
                                    }}>search</button>
                                </div>
                            <button className="filter-btn" onClick={()=> {
                                const filterList  = listOfRestaurants.filter( 
                                        (x) => x.info.avgRating > 4
                                        ) 
                                        setFilterRestaurants(filterList)
                            
                            }}>
                                Top Rated Restaurant
                            </button>
                        </div>
                        <div className="res-conatiner"> 
                        {
                            filterRestaurants?.map(x => <RestaurantCard  key={x.info.id} resData={x} /> )
                        }
                        </div>
                </div>
            )
}

export default Body
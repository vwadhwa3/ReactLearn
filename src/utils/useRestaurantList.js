import { useEffect, useState } from "react"
import  {MENU_API} from "../utils/constants"

const useRestaurantList = () =>{
  
    const [listOfRestaurants, setlistOfRestaurants] = useState([])
    const [filterRestaurants,setFilterRestaurants] = useState([])
        useEffect(()=>{
            fetchdata();
        },[])

      const  fetchdata = async () =>{
        debugger
            const data = await fetch(MENU_API)
            const json = await data.json();
            console.log("custom hook")
            console.log(await json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
            setlistOfRestaurants(await json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
            setFilterRestaurants(await json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
            
        }
        console.log("return ")
        console.log(listOfRestaurants)
        return [listOfRestaurants,filterRestaurants,setFilterRestaurants]

      // return listOfRestaurants
}
 



export default useRestaurantList
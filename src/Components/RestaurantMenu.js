import React, { useState,useEffect } from 'react'
 
import { RestaurantMenu_API } from '../utils/constants';
import Shimmer from './Shimmer' 

const RestaurantMenu = () => {
   const [resInfo,setResInfo] =useState(null);

    useEffect(()=>{
        fetchMenu();
    },[])
    const fetchMenu = async () => {
        const data  = await fetch(RestaurantMenu_API);
        const json = await data.json();
        debugger
        console.log(json)
       //setResInfo(json.data.cards[0]?.card?.card?.info);
      setResInfo(json.data);
       //console.log( "in " +resInfo?.cards[0]?.card?.card?.info?.name)
    }
    //console.log("out " +resInfo?.cards[0]?.card?.card?.info?.name)
   // const {itemCards} = resInfo?.cards[2].card
   const {name ,cuisines,costForTwoMessage }  = resInfo?.cards[0]?.card?.card?.info
  return resInfo == null ? <Shimmer/>  : (
    <div className='menu'>
        {/* <h1>{resInfo.name}</h1>
        <h4>{resInfo.cuisines.join(' ')}</h4>
        <h4>{resInfo.costForTwoMessage}</h4> */}
        <ul>
            <li>  </li>
            <li>  </li>
        </ul>
    </div>
  )
}

export default RestaurantMenu;
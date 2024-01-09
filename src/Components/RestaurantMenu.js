import React, { useEffect } from 'react'
const RestaurantMenu = () => {
    useEffect(()=>{
        fetchMenu();
    },[])
    const fetchMenu =async ()=>{
        
    }
  return (
    <div className='menu'>
        <h1>Name of Restaurant</h1>
        <h2>Menu</h2>
        <ul>
            <li>Burgers</li>
            <li>Coke</li>
        </ul>
    </div>
  )
}

export default RestaurantMenu;
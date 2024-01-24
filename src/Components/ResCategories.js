import { constrainedMemory, title } from "process"
import ResCategoriesList from "./ResCategoriesList"
import { useState } from "react"
const  ResCategories = (props) =>{
    console.log(props)
  const  list  = props.data.itemCards
  const [showItems , setShowItems]= useState(false)
    const {title } = props?.data
    const handleClick =() =>{
        setShowItems(!showItems)
    }

    
    return(
        <div>
            <div className=" w-6/12 mx-auto my-4 bg-gray-100 shodow-lg p-4 ">
                <div className="flex justify-between  cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg">{title} ({props?.data.itemCards.length})</span> 
                    <span>🔽</span> 
                </div>  
                 {showItems  &&  <ResCategoriesList items ={props.data.itemCards} /> }
            </div>
        </div>
    )
}
export default ResCategories
 
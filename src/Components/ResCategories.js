import { constrainedMemory, title } from "process"
import ResCategoriesList from "./ResCategoriesList"

const  ResCategories = ({data,showItems,setShowIndex, dummyData}) =>{
     
 
//   const [showItems , setShowItems]= useState(false)
    const {title } =  data
    const handleClick =() =>{
        ///setShowItems(!showItems)
        setShowIndex()

    }

    
    return(
        <div>
            <div className=" w-6/12 mx-auto my-4 bg-gray-100 shodow-lg p-4 ">
                <div className="flex justify-between  cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg">{title} ({ data.itemCards.length})</span> 
                    <span>🔽</span> 
                </div>  
                 {showItems &&  <ResCategoriesList items ={data.itemCards} dummyData={dummyData} /> }
            </div>
        </div>
    )
}
export default ResCategories
 
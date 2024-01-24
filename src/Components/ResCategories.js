import { title } from "process"
import ResCategoriesList from "./ResCategoriesList"
const  ResCategories = (props) =>{
    console.log(props)
  const  list  = props.data.itemCards
  //console.log(list)
    const {title } = props?.data

    return(
        <div>
            <div className=" w-6/12 mx-auto my-4 bg-gray-100 shodow-lg p-4 ">
                <div className="flex justify-between">
                    <span className="font-bold text-lg">{title} ({props?.data.itemCards.length})</span> 
                    <span>🔽</span> 
                </div>  
                <ResCategoriesList items ={props.data.itemCards} />          
            </div>
        </div>
    )
}
export default ResCategories
 
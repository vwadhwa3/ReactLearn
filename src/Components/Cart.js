import { useSelector } from "react-redux"
import ResCategoriesList from "./ResCategoriesList";
const Cart =() =>{
    const cartItems = useSelector((store)=> store.cart.items);
    return(
        <div className="text-center m-4 p-4">
             <h1 className="font-bold">Cart</h1>
             <div className="w-6/12 m-auto">
                <ResCategoriesList items={cartItems}/>
            </div>
        </div>
    )
}
export default Cart
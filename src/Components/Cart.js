import { useSelector,useDispatch } from "react-redux"
import ResCategoriesList from "./ResCategoriesList";
import {clearCart} from '../utils/cartSlice'
const Cart =() =>{
    const cartItems = useSelector((store)=> store.cart.items);
    const dispatch = useDispatch()
    const handleCartItems = () =>{
         dispatch(clearCart())
    }
    return(
        <div className="text-center m-4 p-4">
             <h1 className="font-bold">Cart</h1>
             <div className="w-6/12 m-auto">
                <button className="p-2 m-2 bg-black text-white rounded-lg" onClick={clearCart}> clear Cart</button>
                {cartItems.length == 0  && (<h1>addItem</h1>)}
                <ResCategoriesList items={handleCartItems}/>
            </div>
        </div>
    )
}
export default Cart
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItem: (state,action)=>{
            // mutaing the state here
            state.items.push(action.payload)
        },
        removeItem:(state,action)=>{  //,action
            state.items.pop()   
        },
        clearCart:(state,action)=>{
            state.items.length=0;  
            //state.items.lenght=[] will not work 
        }
    }
})
export const {addItem,removeItem,clearCart} = cartSlice.actions;
export default cartSlice.reducer;
import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-hot-toast";


const initialState = {
    totalamount: 0,
    totalquantity: 0,
    cartItems: [],
    quantity: 0,
    opencart : false

}

/// PARDON FOR ONE HELL OF A MESSY CODE , This was during my Redux-toolkit learning .... 
/// I'll refactor this code someday :)

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {

        addToCart : (state , action) => {
            console.log(action.payload);
            //check if item exists in cart already
            const indexId = state.cartItems.findIndex((each) => { 
                return action.payload.id === each.id
            })
            console.log(action.payload.id, indexId);
            
            const itt = state.cartItems.find((each) => {
                return action.payload.id === each.id
            })
            // i know its pretty bad code , but stil :( :(
            if (itt) {
                const amt = itt.cartQuantity;
                const temparr = state.cartItems.filter((each) => {
                    return each.id !== itt.id;
                })
                state.cartItems = [...temparr , {...action.payload , cartQuantity : amt + 1}]
            } else {
                const temp = { ...action.payload, cartQuantity: 1 };
                state.cartItems = [...state.cartItems, temp]
                // state.cartItems.push({ ...action.payload, cartQuantity: 1 })
                console.log(state.cartItems);
            }

            toast.success(`${action.payload.title} added to cart`)
            
            console.log("state" , state.cartItems);
            state.cartItems.map((each) => {
                console.log(each.id , );
            })
        },

        toggleAmount: (state, action) => {
            const [data , text] = action.payload;
            console.log("----------------");
            console.log(data , text);
            const item = state.cartItems.find((each) => {
                return data.id == each.id;
                
            })
            const index = state.cartItems.findIndex((each) => {
                return each.id === item.id
            })

            console.log(item.id);
            
            if (text === "increase") {
                state.cartItems[index] = { ...item, cartQuantity: item.cartQuantity + 1 }
                // old method 
                // const amt = item.cartQuantity 
                // const temparr = state.cartItems.filter((each) => each.id !== item.id)
                // // console.log(temparr[0].id);
                // state.cartItems = [...temparr , {...item , cartQuantity : amt + 1 }]
                toast.success(` Item quantity increased`)
            }
            // console.log(state.cartItems);
            else if (text === "decrease") {
                state.cartItems[index] = { ...item, cartQuantity: item.cartQuantity - 1 }
                
                // const amt = item.cartQuantity
                // const temparr = state.cartItems.filter((each) => each.id !== item.id)
                // state.cartItems = [...temparr , {...item , cartQuantity : amt - 1 }]

                toast.success(`Item quantity decreased`)
            }
            console.log(state.cartItems);
        },

        clearCart: (state) => {
            state.cartItems = []
            console.log("fdf");
            console.log(state.cartItems);
            toast.success("Cart Cleared")
        },

        calculateTotals: (state) => {
            let amount = 0;
            let totalQuantity = 0;
            state.cartItems.forEach((each) => {
                amount += each.cartQuantity * each.price;
                totalQuantity += each.cartQuantity;
            })
            state.totalamount = amount;
            state.totalquantity = totalQuantity
        },

        removeItem : (state, action) => {
            const id  = action.payload
            state.cartItems = state.cartItems.filter((each) => each.id !== id)
            toast.success("Item Removed")
        },

        openCart: (state, action) => {
            state.opencart = action.payload
            console.log(state.opencart);
        },

      
        
    }
})

export const {addToCart , toggleAmount , clearCart , calculateTotals , removeItem , openCart}  = cartSlice.actions

export default cartSlice.reducer
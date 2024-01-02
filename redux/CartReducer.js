import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Cart:[],
}


export const CartSlice = createSlice ({

    name:'cart',
    initialState,
    reducers: {
        addToCart: (state,action) => {
            state.Cart = [...state.Cart,action.payload];
        },
        removeFromCart: (state,action) => {
            const newState = state.Cart.filter((item) => item.id !== action.payload.id)
            state.Cart = newState;
        },
        resetCart: (state) => {
            state.Cart = [];
        }
    }

});

export const {addToCart,removeFromCart, resetCart} = CartSlice.actions;

export const selectCart = (state) => state.cart.Cart;
export const selectCartLength = (state) => state.cart.Cart.length;

export default CartSlice.reducer;



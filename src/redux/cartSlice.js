import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    totalPrice: 0,
    cart: [],

}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setAddCart: (state, action) => {
            const find = state.cart.find(item => item.id === action.payload.id)
            find ? find.count++ : state.cart.push({
                ...action.payload,
                count: 1,
            })
            state.totalPrice = state.cart.reduce((summ, curr) => summ += curr.price * curr.count, 0)
        },
        setMinusCart: (state, action) => {
            console.log('action ---->', action)
            const find = state.cart.find(item => item.id === action.payload.id)
            find.count > 1 ? find.count-- : state.cart = state.cart.filter((cart) => cart.id !== action.payload.id)
            state.totalPrice = state.cart.reduce((summ, curr) => summ += curr.price * curr.count, 0)
        },
        setRemoveCart: (state, action) => {
            state.cart = state.cart.filter((cart) => cart.id !== action.payload)
        },
        setClearAll: (state) => {
            state.cart = []
            state.totalPrice = 0
        }
    }
})
export const cartSelector = (state) => state.cart
export const { setAddCart, setRemoveCart, setClearAll, setMinusCart } = cartSlice.actions
export default cartSlice.reducer
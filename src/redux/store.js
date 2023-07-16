import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./filterSlice";
import cartReducer from "./cartSlice";
import plantsReducer from "./plantsSlice";

export const store = configureStore({
    reducer: {
        filter: filterReducer,
        cart: cartReducer,
        plants: plantsReducer,
    }
})
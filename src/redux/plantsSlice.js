import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// асинхронный action

export const fetchPlants = createAsyncThunk('plants/fetchPlantsStatus', async (props) => {
    const { category, sort, order, search, priceA, priceB, sidebarCategory, sidebarCategory2 } = props
    const res = await axios.get(`http://localhost:3000/plants?category=${category}&_sort=${sort}&_order=${order}&q=${search}${priceA}${priceB}${sidebarCategory}${sidebarCategory2}`)
    return res.data
}
)

const initialState = {
    plants: [],
    status: 'loading'
}

const plantsSlice = createSlice({

    name: 'plants',
    initialState,
    reducers: {
        setPlants: (state, action) => {
            state.plants = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPlants.pending, (state) => {
            state.status = 'loading'
            state.plants = [];
        });

        builder.addCase(fetchPlants.fulfilled, (state, action) => {
            state.status = 'success'
            state.plants = action.payload;
        });

        builder.addCase(fetchPlants.rejected, (state) => {
            state.status = 'error'
            state.plants = [];
        });

    }
})

export const { setPlants } = plantsSlice.actions
export default plantsSlice.reducer
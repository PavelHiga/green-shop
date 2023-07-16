import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categoryId: 'Кактусы',
    filters: {
        sortId: { name: 'Популярности', sort: 'rating' },
        orderBy: true,
        searchValue: '',
        price: '',
        sidebarCategory: '',
        sidebarCategory2: '',
        inputValue: '',
    },
    remove: false
}

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCategoryId: (state, action) => {
            state.categoryId = action.payload
            state.filters = {
                sortId: { name: 'Популярности', sort: 'rating' },
                orderBy: true,
                searchValue: '',
                price: '',
                sidebarCategory: '',
                sidebarCategory2: '',
                inputValue: '',
            }
        },
        setSortId: (state, action) => {
            state.filters.sortId = action.payload
        },
        setOrderBy: (state) => {
            state.filters.orderBy = !state.filters.orderBy
        },
        setSearchValue: (state, action) => {
            state.filters.searchValue = action.payload
        },
        setPrice: (state, action) => {
            state.filters.price = action.payload
        },
        setSidebarCategory: (state, action) => {
            state.filters.sidebarCategory = action.payload
        },
        setSidebarCategory2: (state, action) => {
            state.filters.sidebarCategory2 = action.payload
        },
        setInputValue: (state, action) => {
            state.filters.inputValue = action.payload
        },
        setRemoveFilters: (state) => {
            state.remove = !state.remove
            state.filters = {
                sortId: { name: 'Популярности', sort: 'rating' },
                orderBy: true,
                searchValue: '',
                price: '',
                sidebarCategory: '',
                sidebarCategory2: '',
                inputValue: '',
            }
        }

    }
})

export const { setCategoryId, setSortId, setOrderBy, setSearchValue, setPrice, setSidebarCategory, setSidebarCategory2, setInputValue, setRemoveFilters } = filterSlice.actions
export default filterSlice.reducer
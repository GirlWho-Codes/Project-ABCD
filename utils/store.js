import { configureStore, createSlice } from '@reduxjs/toolkit'

const searchSlice = createSlice({
    name: 'search',
    initialState: { searchTerm: '' },
    reducers: {
        setSearchTerm(state, action) {
            state.searchTerm = action.payload
        }
    }
})

export const actions = searchSlice.actions

const store = configureStore({
    reducer: searchSlice.reducer
})

export default store
import {createSlice} from '@reduxjs/toolkit'; 

const searchSeriesSlice = createSlice({
    name: 'searchSeries',
    initialState: {
        searchTerm: ''        
    },
    reducers:{
        changeSeriesSearchTerm(state, action){
            state.searchTerm = action.payload;
        }     
    }

})

export const {changeSeriesSearchTerm} = searchSeriesSlice.actions; 
export const searchSeriesReducer = searchSeriesSlice.reducer;
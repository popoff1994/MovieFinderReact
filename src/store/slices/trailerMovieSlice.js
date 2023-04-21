import {createSlice} from '@reduxjs/toolkit'; 

const trailerMovieSlice = createSlice({
    name: 'playVideo',
    initialState: {
        videoToPlay: ''   
    },
    reducers:{
        changePlayTrailer(state, action){
            state.videoToPlay = action.payload;
        }     
    }

})

export const {changePlayTrailer} = trailerMovieSlice.actions; 
export const trailerMovieReducer = trailerMovieSlice.reducer;
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { moviesApi } from './apis/moviesApi';
import { searchMovieReducer, changeSearchTerm } from './slices/searchMovieSlice';
import { favoritesApi } from './apis/favoritesApi';
import { trailerMovieReducer, changePlayTrailer } from './slices/trailerMovieSlice';
import { seriesApi } from './apis/seriesApi';
import { searchSeriesReducer, changeSeriesSearchTerm } from './slices/searchSeriesSlice';
//import { movieInfoReducer, changeMovieInfo } from './slices/movieInfoSlice';

export const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
    searchMovie: searchMovieReducer, //dette er en mere sikker måde, ungår "typo's"
    searchSeries: searchSeriesReducer,
    playVideo: trailerMovieReducer,
    //movieInfo: movieInfoReducer,
    [favoritesApi.reducerPath]: favoritesApi.reducer,
    [seriesApi.reducerPath]: seriesApi.reducer,
    
  },
  middleware: (getDefaultMiddleware) => {  //Thunk middelware er default når der benyttes Redux Toolkit configureStore.
    return getDefaultMiddleware()
    .concat(moviesApi.middleware).concat(favoritesApi.middleware).concat(seriesApi.middleware);
  }
});

setupListeners(store.dispatch);

export { useFetchPopularMoviesQuery, useFetchHighestRatedMoviesQuery, useFetchSearchMovieQuery, useFetchUpcomingMoviesQuery, useFetchVideoMoviesMutation, useFetchMovieProviderMutation } from './apis/moviesApi';
export { useFetchPopularTVShowsQuery, useFetchVideoSeriesMutation, useFetchSeriesProviderMutation, useFetchSearchSeriesQuery} from './apis/seriesApi';
export { useFetchFavoriteMoviesQuery, useAddFavoriteIDMutation, useRemoveFavoriteIdMutation, useAddFavoriteSeriesMutation, useAddFavoriteSeriesIDMutation, useRemoveFavoriteSeriesIDMutation, useRemoveFavoriteSeriesMutation, useFetchFavoriteSeriesQuery} from './apis/favoritesApi';
export {changeSearchTerm, changePlayTrailer, changeSeriesSearchTerm};

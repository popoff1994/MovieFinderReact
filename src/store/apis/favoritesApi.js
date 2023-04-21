import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const favoritesApi = createApi({
    reducerPath: 'favoriteMovies',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005'
    }),
    endpoints(builder){
        return{
            fetchFavoriteMovies: builder.query({
                providesTags: ['Movies', 'Post', 'Delete'],
                query: () =>{
                    return{
                        url: 'favorites',
                        method: 'GET'
                    };
                },
            }),
            fetchFavoriteMovieID: builder.query({
                providesTags: ['MoviesId'],
                query: () =>{
                    return{
                        url: 'favoriteid',
                        method: 'GET'
                    };
                },
                transformResponse: (response) => response.map(id => id.id)
            }),
            fetchFavoriteSeries: builder.query({
                providesTags: ['Series', 'Post', 'Delete'],
                query: () =>{
                    return{
                        url: 'favoriteseries',
                        method: 'GET'
                    };
                },
            }),
            fetchFavoriteSeriesID: builder.query({
                providesTags: ['SeriesId'],
                query: () =>{
                    return{
                        url: 'favoriteseriesid',
                        method: 'GET'
                    };
                },
                transformResponse: (response) => response.map(id => id.id)
            }),
            addFavorite: builder.mutation({
                  invalidatesTags: ['Movies', 'Post'],
                  query: (movie) =>{
                      return {
                          url: 'favorites', 
                          method: 'POST',
                          body: movie,
                          
                      };
                  }
              }),
            addFavoriteSeries: builder.mutation({
                  invalidatesTags: ['Series', 'Post'],
                  query: (series) =>{
                      return {
                          url: 'favoriteSeries', 
                          method: 'POST',
                          body: series,
                          
                      };
                  }
              }),
              addFavoriteID: builder.mutation({
                invalidatesTags: ['MoviesId', 'Post'],
                query: (id) =>{
                    return {
                        url: 'favoriteId', 
                        method: 'POST',
                        body: {"id": id},
                        
                    };
                }
            }),
              addFavoriteSeriesID: builder.mutation({
                invalidatesTags: ['SeriesId', 'Post'],
                query: (id) =>{
                    return {
                        url: 'favoriteSeriesId', 
                        method: 'POST',
                        body: {"id": id},
                        
                    };
                }
            }),
              removeFavorite: builder.mutation({
                  invalidatesTags: ['Movies', 'Delete'],
                  query: (movie) => {
                      return {
                          url: `favorites/${movie.id}`, 
                          method: 'DELETE'
                      };
                  }
              }),
              removeFavoriteId: builder.mutation({
                invalidatesTags: ['MoviesId', 'Delete'],
                query: (id) => {
                    return {
                        url: `favoriteId/${id}`, 
                        method: 'DELETE'
                    };
                }
            }),
              removeFavoriteSeries: builder.mutation({
                  invalidatesTags: ['Series', 'Delete'],
                  query: (series) => {
                      return {
                          url: `favoriteSeries/${series.id}`, 
                          method: 'DELETE'
                      };
                  }
              }),
              removeFavoriteSeriesID: builder.mutation({
                invalidatesTags: ['SeriesId', 'Delete'],
                query: (id) => {
                    return {
                        url: `favoriteSeriesId/${id}`, 
                        method: 'DELETE'
                    };
                }
            }),
        }
    }
});

export const {
    useFetchFavoriteMoviesQuery,
    useFetchFavoriteMovieIDQuery,
    useAddFavoriteMutation,
    useRemoveFavoriteMutation,
    useAddFavoriteIDMutation,
    useRemoveFavoriteIdMutation,
    useAddFavoriteSeriesIDMutation,
    useAddFavoriteSeriesMutation,
    useRemoveFavoriteSeriesIDMutation,
    useRemoveFavoriteSeriesMutation,
    useFetchFavoriteSeriesIDQuery,
    useFetchFavoriteSeriesQuery} = favoritesApi;
export {favoritesApi};
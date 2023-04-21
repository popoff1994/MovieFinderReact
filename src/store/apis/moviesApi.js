import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const moviesApi = createApi({
  reducerPath: 'movies',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://api.themoviedb.org/3/'
  }),
  endpoints(builder) {
    return {
      fetchPopularMovies: builder.query({
        query: () => {
          return {
            url: 'discover/movie',
            params: {
              sort_by: 'popularity.desc',
              api_key: '7f81f424f0b573ef027bc1c08cd915b0',
            },
            method: 'GET',
          };
        },
      }),
      fetchHighestRatedMovies: builder.query({
        query: () => {
          return {
            url: 'discover/movie',
            params: {
              sort_by: 'vote_average.desc',
              api_key: '7f81f424f0b573ef027bc1c08cd915b0',
              page:60,         
            },
            method: 'GET',
          };
        },
      }),
      fetchSearchMovie: builder.query({
        query: (searchTerm) => {
          return {
            url: 'search/movie',
            params: {
              query: searchTerm,
              api_key: '7f81f424f0b573ef027bc1c08cd915b0'
            },
            method: 'GET',
          };
        },
      }),  
      fetchUpcomingMovies: builder.query({
        query: () => {
          return {
            url: 'movie/upcoming',
            params: {
              api_key: '7f81f424f0b573ef027bc1c08cd915b0',
              language: "en-US",
              page: 2
            },
            method: 'GET',
          };
        },
      }),
      fetchVideoMovies: builder.mutation({
        query: (movie) => {
          return{
            url: `movie/${movie.id}/videos`,
            params: {
              api_key: '7f81f424f0b573ef027bc1c08cd915b0'
            },
            method: 'GET',
          };
        },
      }),
      fetchMovieProvider: builder.mutation({
        query: (movie) => {
          return {
            url: `movie/${movie.id}/watch/providers`,
            params: {
              api_key: '7f81f424f0b573ef027bc1c08cd915b0',
            },
            method: 'GET',
          };
        },
      }),  
    };
  },
});

export const {
  useFetchPopularMoviesQuery, 
  useFetchHighestRatedMoviesQuery, 
  useFetchSearchMovieQuery, 
  useFetchUpcomingMoviesQuery, 
  useFetchVideoMoviesMutation,
  useFetchMovieProviderMutation} = moviesApi;
export { moviesApi };
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const seriesApi = createApi({
  reducerPath: 'series',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://api.themoviedb.org/3/'
  }),
  endpoints(builder) {
    return {
      fetchPopularTVShows: builder.query({
        query: () => {
          return {
            url: 'discover/tv',
            params: {
              sort_by: 'popularity.desc',
              api_key: '7f81f424f0b573ef027bc1c08cd915b0',
              page: 10 ,
            },
            method: 'GET',
          };
        },
      }),
      fetchSearchSeries: builder.query({
        query: (searchTerm) => {
          return {
            url: 'search/tv',
            params: {
              query: searchTerm,
              api_key: '7f81f424f0b573ef027bc1c08cd915b0'
            },
            method: 'GET',
          };
        },
      }),  
      fetchVideoSeries: builder.mutation({
        query: (series) => {
          return{
            url: `tv/${series.id}/videos`,
            params: {
              api_key: '7f81f424f0b573ef027bc1c08cd915b0'
            },
            method: 'GET',
          };
        },
      }),
      fetchSeriesProvider: builder.mutation({
        query: (series) => {
          return {
            url: `tv/${series.id}/watch/providers`,
            params: {
              api_key: '7f81f424f0b573ef027bc1c08cd915b0',
            },
            method: 'GET',
          };
        },
      }),  
    }}
});
export const {useFetchPopularTVShowsQuery, useFetchVideoSeriesMutation, useFetchSeriesProviderMutation, useFetchSearchSeriesQuery} = seriesApi;
export {seriesApi};
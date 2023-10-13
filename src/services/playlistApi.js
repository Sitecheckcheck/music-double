import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const PlaylistApi = createApi({
  reducerPath: 'PlaylistApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://skypro-music-api.skyeng.tech',
  }),
  endpoints: (builder) => ({
    getPlaylistSelection: builder.query({
      query: (id) => `catalog/selection/${id}/`,
    }),
    getPlaylistAll: builder.query({
      query: () => `catalog/track/all/`,
    }),
    getPlaylistFavorite: builder.query({
      query: (token) => ({
        url: `/catalog/track/favorite/all/`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const { useGetSelectionPlaylistQuery } = SelectionPlaylistApi;

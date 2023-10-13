import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const SelectionPlaylistApi = createApi({
  reducerPath: 'SelectionPlaylistApi',
  tagTypes: ['SelectPlaylist'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://skypro-music-api.skyeng.tech',
  }),
  endpoints: (builder) => ({
    getSelectionPlaylist: builder.query({
      query: (id) => `catalog/selection/${id}/`,
    }),
  }),
});

export const { useGetSelectionPlaylistQuery } = SelectionPlaylistApi;

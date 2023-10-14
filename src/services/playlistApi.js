/* eslint-disable */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { selectTrackFunction } from '../store/sliceSelectTrack';
import { logOut } from '../internal/App';

const baseQueryWithReauth = async (rgs, api, extraOptions) => {
  const baseQuery = fetchBaseQuery({
    baseUrl: 'https://skypro-music-api.skyeng.tech',
    prepareHeaders: (headers) => {
      const accessToken = localStorage.getItem('access');

      if (accessToken) {
        headers.set('authorization', `Bearer ${accessToken}`);
      }
      return headers;
    },
  });

  const result = await baseQuery(rgs, api, extraOptions);

  if (result?.error?.status !== 401) {
    return result;
  }

  const forceLogout = () => {
    logOut();
    dispatch(selectTrackFunction(null));
  };

  const refreshToken = localStorage.getItem('refresh');

  if (!refreshToken) {
    return forceLogout();
  }

  const refreshResult = await baseQuery(
    {
      url: '/user/token/refresh/',
      method: 'POST',
      body: JSON.stringify({
        refresh: `${refreshToken}`,
      }),
      headers: {
        'content-type': 'application/json',
      },
    },
    api,
    extraOptions,
  );
  console.log(refreshResult);
  if (!refreshResult.data.access) {
    return forceLogout();
  }

  localStorage.setItem('access', refreshResult.data.access);

  const retryResult = await baseQuery(rgs, api, extraOptions);

  if (retryResult?.error?.status === 401) {
    return forceLogout();
  }

  return retryResult;
};

export const PlaylistApi = createApi({
  reducerPath: 'PlaylistApi',
  tagTypes: ['Playlist'],
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    getPlaylistSelection: builder.query({
      query: (id) => `catalog/selection/${id}/`,
      providesTags: [{ type: 'Playlist', id: 'LIST' }],
    }),
    getPlaylistAll: builder.query({
      query: () => `catalog/track/all/`,
      providesTags: [{ type: 'Playlist', id: 'LIST' }],
    }),
    getPlaylistFavorite: builder.query({
      query: () => ({
        url: `/catalog/track/favorite/all/`,
      }),
      providesTags: [{ type: 'Playlist', id: 'LIST' }],
    }),
    addFavorite: builder.mutation({
      query: (id) => ({
        url: `/catalog/track/${id}/favorite/`,
        method: 'POST',
      }),
      invalidatesTags: [{ type: 'Playlist', id: 'LIST' }],
    }),
    deleteFavorite: builder.mutation({
      query: (id) => ({
        url: `/catalog/track/${id}/favorite/`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Playlist', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetPlaylistAllQuery,
  useGetPlaylistSelectionQuery,
  useGetPlaylistFavoriteQuery,
  useAddFavoriteMutation,
  useDeleteFavoriteMutation,
} = PlaylistApi;

// /* eslint-disable */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseURL, refreshingToken } from '../api';

export const fetchFavoritePlaylist = createAsyncThunk(
  'favoritePlaylist/fetchFavoritePlaylist',
  async (_, { rejectWithValue }) => {
    const accessToken = localStorage.getItem('access');

    try {
      let response = await fetch(`${baseURL}/catalog/track/favorite/all/`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!response.ok && response.status !== 401) {
        throw new Error('Ошибка сервера');
      }

      if (response.status === 401) {
        const refteshToken = localStorage.getItem('refresh');
        const access = await refreshingToken(refteshToken);

        localStorage.setItem('access', access.access);

        response = await fetch(`${baseURL}/catalog/track/favorite/all/`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${access.access}`,
          },
        });

        const data = await response.json();

        return data;
      }

      const data = await response.json();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const sliceFavoritePlaylist = createSlice({
  name: 'favoritePlaylist',
  initialState: {
    favoritePlaylist: [],
    status: null,
    error: null,
  },
  reducers: {
    favoritePlaylistFunction(state, action) {
      state.favoritePlaylist = action.payload;
    },
  },

  extraReducers: {
    [fetchFavoritePlaylist.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchFavoritePlaylist.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.favoritePlaylist = action.payload;
    },
    [fetchFavoritePlaylist.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
  },
});

export const { favoritePlaylistFunction } = sliceFavoritePlaylist.actions;
export default sliceFavoritePlaylist.reducer;

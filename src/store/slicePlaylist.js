// /* eslint-disable */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseURL } from '../api';

export const fetchPlaylist = createAsyncThunk(
  'playlist/fetchPlaylist',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${baseURL}/catalog/track/all/`);

      if (!response.ok) {
        throw new Error('Ошибка сервера');
      }

      const data = await response.json();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const slicePlaylist = createSlice({
  name: 'playlist',
  initialState: {
    playlist: [],
    status: null,
    error: null,
  },
  reducers: {
    playlistFunction(state, action) {
      state.playlist = action.payload;
    },
  },

  extraReducers: {
    [fetchPlaylist.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchPlaylist.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.playlist = action.payload;
    },
    [fetchPlaylist.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
  },
});

export const { playlistFunction } = slicePlaylist.actions;
export default slicePlaylist.reducer;

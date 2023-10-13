import { configureStore } from '@reduxjs/toolkit';
import selectTrackReducer from './sliceSelectTrack';
import userNameReduser from './sliceUserName';
import playlistReduser from './slicePlaylist';
import favoritePlaylistReduser from './sliceFavoritePlaylist';
import { SelectionPlaylistApi } from '../services/selectionPlaylistApi';

export const store = configureStore({
  reducer: {
    selectTrack: selectTrackReducer,
    userName: userNameReduser,
    playlist: playlistReduser,
    favoritePlaylist: favoritePlaylistReduser,
    [SelectionPlaylistApi.reducerPath]: SelectionPlaylistApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(SelectionPlaylistApi.middleware),
});

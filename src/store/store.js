import { configureStore } from '@reduxjs/toolkit';
import selectTrackReducer from './sliceSelectTrack';
import userNameReduser from './sliceUserName';
import playlistReduser from './slicePlaylist';
// import favoritePlaylistReduser from './sliceFavoritePlaylist';
// import { SelectionPlaylistApi } from '../services/selectionPlaylistApi';
import { PlaylistApi } from '../services/playlistApi';

export const store = configureStore({
  reducer: {
    selectTrack: selectTrackReducer,
    userName: userNameReduser,
    playlist: playlistReduser,
    // favoritePlaylist: favoritePlaylistReduser,
    [PlaylistApi.reducerPath]: PlaylistApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(PlaylistApi.middleware),
});  

import { createSlice } from '@reduxjs/toolkit';

const sliceSelectTrack = createSlice({
  name: 'selectTrack',
  initialState: {
    selectTrack: null,
  },
  reducers: {
    selectTrackFunction(state, action) {
      state.selectTrack = action.payload;
    },
    selectTrackChange(state, action) {
      state.selectTrack = action.payload;
    },
  },
});

export const { selectTrackFunction } = sliceSelectTrack.actions;
export default sliceSelectTrack.reducer;

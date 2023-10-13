import { createSlice } from '@reduxjs/toolkit';

const sliceUserName = createSlice({
  name: 'userName',
  initialState: {
    userName: localStorage.getItem('user'),
  },
  reducers: {
    userNameFunction(state, action) {
      state.userName = action.payload;
    },
  },
});

export const { userNameFunction } = sliceUserName.actions;
export default sliceUserName.reducer;

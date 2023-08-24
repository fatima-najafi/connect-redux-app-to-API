import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
const url = 'https://randomuser.me/api/?results=5';
const initialState = {
  userItem: [],
  isLoading: false,
  error: false,
};

export const getUserItem = createAsyncThunk('user/getUserItem', () => {
  return fetch(url)
    .then((resp) => resp.json())
    .catch((err) => console.log(err));
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [getUserItem.pending]: (state) => {
      state.isLoading = true;
    },
    [getUserItem.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.userItem = action.payload.results;
    },
    [getUserItem.rejected]: (state) => {
      state.isLoading = false;
      state.error = true;
    },
  },
});

export const { sayHello } = userSlice.actions;
export default userSlice.reducer;

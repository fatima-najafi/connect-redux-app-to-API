import { configureStore } from '@reduxjs/toolkit';
import usersSlice from './store/usersSlice';
const store = configureStore({
  reducer: {
    users: usersSlice,
  },
});

export default store;

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { fetchCount } from './counter/counterAPI';

export const userSlice = createSlice({
  name: 'user',
  initialState:{
    user:null,
  },
 
  reducers: {
    login: (state, action) => {
      state.user = action.payload; //object that we pass along with it
    },
    logout: (state) => {
      state.user = null;
    },
  },

});

export const { login, logout } = userSlice.actions;

//selectors. they allow us to pull info from the redux data layer
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },

    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { login, logout } = userSlice.actions;

//selectors
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;

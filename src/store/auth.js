import { createSlice } from "@reduxjs/toolkit";

const initialAuthValue = { authenticated: false };

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthValue,
  reducers: {
    login(state) {
      state.authenticated = true;
    },
    logout(state) {
      state.authenticated = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
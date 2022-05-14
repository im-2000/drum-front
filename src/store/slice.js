import { createSlice } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";

const initialState = {
  keys: ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    saveLoginData: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    logout: (state) => {
      return { ...initialState };
    },
  },
});

export const { startLoading, saveLoginData, logout } = authSlice.actions;

export default authSlice.reducer;

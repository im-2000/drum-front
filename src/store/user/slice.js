import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token"),
  profile: null,
  favorites: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      localStorage.setItem("token", action.payload.token);
      state.token = action.payload.token;
      state.profile = action.payload.user;
    },
    logOut: (state, action) => {
      localStorage.removeItem("token");
      state.token = null;
      state.profile = null;
    },
    tokenStillValid: (state, action) => {
      state.profile = action.payload.user;
    },
    toggleFavorites: (state, action) => {
      const idToAdd = action.payload;
      const newFavs = state.favorites.includes(idToAdd)
        ? state.favorites.filter((idNumber) => idNumber !== idToAdd)
        : [...state.favorites, idToAdd];

      state.favorites = newFavs;
    },
  },
});

export const { loginSuccess, logOut, tokenStillValid, toggleFavorites } =
  userSlice.actions;

export default userSlice.reducer;

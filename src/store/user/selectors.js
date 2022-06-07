export const selectToken = (state) => state.userReducer.token;

export const selectUser = (state) => state.userReducer.profile;

export const selectFavorites = (state) => state.userReducer.favorites;

import { configureStore } from "@reduxjs/toolkit";
import channelsReducer from "./channels/slice";
import feedReducer from "./feed/slice";
import userReducer from "./user/slice";
import appStateReducer from "./appState/slice";

const store = configureStore({
  reducer: {
    appStateReducer,
    userReducer,
    channelsReducer,
    feedReducer,
  },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import channelsReducer from "./channels/slice";
import feedReducer from "./feed/slice";

const store = configureStore({
  reducer: {
    channelsReducer,
    feedReducer,
  },
});

export default store;

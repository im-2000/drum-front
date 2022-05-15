import { configureStore } from "@reduxjs/toolkit";
import channelsReducer from "./channels/slice";

const store = configureStore({
  reducer: {
    channelsReducer,
  },
});

export default store;

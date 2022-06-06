import { configureStore } from "@reduxjs/toolkit";
import channelsReducer from "./channels/slice";
import feedReducer from "./feed/slice";
import userReducer from "./user/slice";
import appStateReducer from "./appState/slice";
import drumMachineReducer from "./drumMachine/slice";
import looperReducer from "./looper/slice";

const store = configureStore({
  reducer: {
    appStateReducer,
    userReducer,
    channelsReducer,
    feedReducer,
    drumMachineReducer,
    looperReducer,
  },
});

export default store;

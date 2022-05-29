import React, { useEffect } from "react";
import "./App.css";
import { MainPage } from "./pages/MainPage";
import { Navigation } from "./components/Navigation/index";
import background from "../src/image/circle.jpeg";

import { Routes, Route } from "react-router-dom";

import Loading from "./components/Loading/index";
import MessageBox from "./components/MessageBox";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/user/actions";
import { selectToken } from "./store/user/selectors";
import { SliderBpm } from "./components/Slider/Slider";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);
  const token = useSelector(selectToken);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 2000,
      }}
    >
      <div>
        <Navigation />
      </div>
      <div
        style={{
          display: "flex",
          alignIems: "center",
          justifyContent: "center",
        }}
      ></div>
      <MessageBox />
      {isLoading ? <Loading /> : null}
      <Routes>
        <Route exact path="/main" element={<MainPage token={token} />} />

        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

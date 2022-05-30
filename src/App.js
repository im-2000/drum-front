import React, { useEffect } from "react";
import "./App.css";
import { Sampler } from "./pages/Sampler";
import { Looper } from "./pages/Looper/Looper";
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
        // backgroundImage: `url(${background})`,
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
        <Route exact path="/sampler" element={<Sampler token={token} />} />
        <Route exact path="/looper" element={<Looper />} />

        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

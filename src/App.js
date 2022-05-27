import React, { useEffect } from "react";
import "./App.css";
import { MainPage } from "./pages/MainPage";
import { Navigation } from "./components/Navigation/index";

import { Routes, Route } from "react-router-dom";

import Loading from "./components/Loading/index";
import MessageBox from "./components/MessageBox";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/index";
import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/user/actions";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation />
      <MessageBox />
      {isLoading ? <Loading /> : null}
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

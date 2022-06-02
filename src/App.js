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
import Intro from "./pages/Intro/Intro";
import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/user/actions";
import { selectToken } from "./store/user/selectors";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { SliderBpm } from "./components/Slider/Slider";
// import { Recorder } from "./components/Recorder/Recorder";
// import { useNavigate } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);
  const token = useSelector(selectToken);
  // const navigate = useNavigate();

  // if (token === null) {
  //   navigate("/");
  // }

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <DndProvider backend={HTML5Backend}>
      <div
        className="App"
        style={{
          // backgroundImage: `url(${background})`,
          backgroundSize: 2000,
        }}
      >
        {/* <div>{token && <Navigation token={token} />}</div> */}
        <div
          style={{
            display: "flex",
            alignIems: "center",
            justifyContent: "center",
          }}
        ></div>
        <MessageBox />
        {isLoading ? <Loading /> : null}
        {/* {token && <SliderBpm />} */}
        {/* <Recorder /> */}
        <Routes>
          <Route exact path="/" element={<Intro />} />
          <Route exact path="/login" element={<Login />} />
          {<Route exact path="/sampler" element={<Sampler />} />}
          <Route exact path="/looper" element={<Looper />} />

          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </DndProvider>
  );
}

export default App;

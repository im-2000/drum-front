import React, { useEffect } from "react";
import "./App.css";
import { Sampler } from "./pages/Sampler";
import { Drummer } from "./pages/Drummer/Drummer";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/Loading/index";
import MessageBox from "./components/MessageBox";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import Intro from "./pages/Intro/Intro";
import { MyTracks } from "./pages/MyTracks/MyTracks";
import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/user/actions";
// import { DndProvider } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      {/* <DndProvider backend={HTML5Backend}> */}
      {/* <MessageBox /> */}
      {isLoading ? <Loading /> : null}

      <Routes>
        <Route exact path="/" element={<Intro />} />
        <Route exact path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        {<Route exact path="/sampler" element={<Sampler />} />}
        <Route exact path="/drummer" element={<Drummer />} />
        <Route path="/tracks" element={<MyTracks />} />
      </Routes>
      {/* </DndProvider> */}
    </div>
  );
}

export default App;

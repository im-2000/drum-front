import { Channels } from "../components/Channels";
import { Analyser } from "../components/Analyser";
import { Browser } from "../components/Browser/Browser";
import "../components/channel_rack.css";
import background from "../image/circle.jpeg";
// import { SideBar } from "../components/SideBar/SideBar";
import { selectToken } from "../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const MainPage = () => {
  return (
    <div
      className="container"
      // style={{ backgroundImage: `url(${background})` }}
    >
      <div>
        <Browser />
      </div>

      <div>
        <Channels />
      </div>
      <div>
        <Analyser />
      </div>
    </div>
  );
};

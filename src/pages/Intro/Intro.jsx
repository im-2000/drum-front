import * as React from "react";
import { Label } from "../../components/Label/Label";

import background from "../../image/Animation.gif";
import { selectToken } from "../../store/user/selectors";
import { useSelector } from "react-redux";
// import LoggedIn from "./LoggedIn";
// import LoggedOut from "./LoggedOut";
import { Link } from "react-router-dom";

export default function Intro(props) {
  const token = useSelector(selectToken);
  //   const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;

  return (
    <div
      className="intro"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        fontFamily: "Audiowide",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div>
        <Label />
      </div>
      &nbsp;
      <div>
        {" "}
        <Link
          to="/login"
          style={{
            color: "white",
          }}
        >
          LOGIN
        </Link>
      </div>
      {/* {loginLogoutControls} */}
    </div>
  );
}

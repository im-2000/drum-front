import React from "react";
// import { useSelector } from "react-redux";
// import { selectToken } from "../../store/user/selectors";
// import LoggedIn from "./LoggedIn";
// import LoggedOut from "./LoggedOut";
import { Link } from "react-router-dom";

export const Navigation = () => {
  // const token = useSelector(selectToken);

  // const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;

  return (
    <div className="navigation">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Link className="label" to="/">
          TWEAK PEAK
        </Link>
      </div>

      <div>
        <Link className="navigation-item" to="/sampler">
          Sampler
        </Link>
      </div>
      <div>
        <Link className="navigation-item" to="/drummer">
          Drummer
        </Link>
      </div>

      {/* {loginLogoutControls} */}
    </div>
  );
};

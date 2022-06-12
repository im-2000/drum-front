import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import NavbarItem from "./NavbarItem";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
import { Link } from "react-router-dom";
import logo from "../../image/logo3_2.png";
import "./Sidebar.css";
// import { slide as Menu } from "react-burger-menu";
import { bubble as Menu } from "react-burger-menu";
// import { reveal as Menu } from "react-burger-menu";

export function Navigation() {
  const token = useSelector(selectToken);

  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;

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
        {/* <div>
          <img src={logo} alt="logo" style={{ maxWidth: 100 }} />
        </div> */}

        <div>
          <Link
            className="label"
            // style={{
            //   textDecoration: "none",
            //   color: "violet",
            //   fontSize: 40,
            // }}
            to="/sampler"
          >
            TWEAK PEAK
          </Link>
        </div>
      </div>
      {/* {token && (
        <> */}
      <div>
        <Link
          className="navigation-item"
          // style={{
          //   color: "white",
          //   textDecoration: "none",
          //   fontSize: 18,
          // }}
          to="/sampler"
        >
          Sampler
        </Link>
      </div>
      <div>
        {" "}
        (
        <Link
          className="navigation-item"
          // style={{
          //   color: "white",
          //   textDecoration: "none",
          //   fontSize: 18,
          // }}
          to="/drummer"
        >
          Drummer
        </Link>
        )
      </div>
      <div>
        {" "}
        <Link
          className="navigation-item"
          // style={{
          //   color: "white",
          //   textDecoration: "none",
          //   fontSize: 18,
          // }}
          to="/tracks"
        >
          MyTracks
        </Link>
      </div>
      {/* </>
      )
    } */}
      {loginLogoutControls}
    </div>
  );
}

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

export function Navigation() {
  const token = useSelector(selectToken);

  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;

  return (
    <div className="navigation">
      <div>
        <Link
          className="label"
          style={{
            textDecoration: "none",
            color: "violet",
            fontSize: 45,
          }}
          to="/sampler"
        >
          TWEAK PEAK
        </Link>
      </div>
      {token && (
        <>
          <div>
            <Link
              style={{
                color: "white",
                textDecoration: "none",
              }}
              to="/sampler"
            >
              Sampler
            </Link>
          </div>
          <div>
            {" "}
            (
            <Link
              style={{
                color: "white",
                textDecoration: "none",
              }}
              to="/drummer"
            >
              Drummer
            </Link>
            )
          </div>
          <div>
            {" "}
            <Link
              style={{
                color: "white",
                textDecoration: "none",
              }}
              to="/tracks"
            >
              MyTracks
            </Link>
          </div>
        </>
      )}

      {loginLogoutControls}
    </div>
  );
}

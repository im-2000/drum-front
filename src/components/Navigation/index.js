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
    <div
      className="navigation"
      style={
        {
          // backgroundColor: "grey",
          // width: 1375,
          // color: "white",
          // display: "flex",
          // alignItems: "center",
          // justifyContent: "center",
          // flexDirection: "row",
        }
      }
    >
      <div>
        <Link
          style={{
            color: "#42f5c8",
            fontSize: 50,
          }}
          to="/main"
        >
          TWEAK PEAK
        </Link>
      </div>
      <div>
        <Link
          style={{
            color: "white",
          }}
          to="/main"
        >
          Main
        </Link>
      </div>
      <div>
        {" "}
        <Link
          style={{
            color: "white",
          }}
          to="/myspace"
        >
          Loop
        </Link>
      </div>

      {loginLogoutControls}
    </div>
  );
}

{
  /* <div
style={{
  backgroundColor: "black",
  width: 1375,
  color: "white",
  // display: "flex",
  // alignItems: "center",
  justifyContent: "space-between",
}}
>
<Navbar>
  <div>
    <Navbar.Brand as={NavLink} to="/main">
      APP NAME
    </Navbar.Brand>
  </div>

  <Nav>
    <div>
      <NavbarItem path="/main" linkText="Main" />
    </div>
    <div>{<NavbarItem path="/myspace" linkText="My space" />}</div>

    {loginLogoutControls}
  </Nav>
  {/* <SliderSizes /> */
}
// </Navbar>
// </div> */}

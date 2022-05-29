import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import NavbarItem from "./NavbarItem";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
import SliderSizes from "../Slider/Slider";
import { flexbox } from "@mui/system";

export function Navigation() {
  const token = useSelector(selectToken);

  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;

  return (
    <div
      style={{
        backgroundColor: "red",
        width: 1600,
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
        {/* <SliderSizes /> */}
      </Navbar>
    </div>
  );
}

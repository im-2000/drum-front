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
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Navbar>
        <Navbar.Brand as={NavLink} to="/main">
          APP NAME
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            style={{
              width: "100%",
            }}
            fill
          >
            <NavbarItem path="/main" linkText="Main" />
            {<NavbarItem path="/myspace" linkText="My space" />}

            {loginLogoutControls}
          </Nav>
          <SliderSizes />
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

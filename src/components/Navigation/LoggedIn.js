import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/user/slice";
import Button from "react-bootstrap/Button";
import { selectUser } from "../../store/user/selectors";
import Nav from "react-bootstrap/Nav";

export default function LoggedIn() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <>
      <Nav.Item>{user?.email}</Nav.Item>
      <Button
        className="button-logout"
        // style={{
        //   width: 100,
        //   height: 40,
        //   backgroundColor: "#333",
        //   color: "white",
        //   borderColor: "green",
        //   fontFamily: "Audiowide",
        // }}
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </>
  );
}

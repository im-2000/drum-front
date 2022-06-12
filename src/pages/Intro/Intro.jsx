import * as React from "react";
import { Label } from "../../components/Label/Label";
import background from "../../image/Animation.gif";
import { Link } from "react-router-dom";
import logo from "../../image/logo3_5.png";

export default function Intro(props) {
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
      <div className="logo">
        <Link to="/login">
          <img
            src={logo}
            alt="logo"
            style={{
              maxWidth: 200,
            }}
          />
          {/* <Label /> */}
        </Link>
      </div>
      &nbsp;
      {/* <div>
        <Link
          to="/login"
          style={{
            color: "white",
          }}
        >
          LOGIN
        </Link>
      </div> */}
    </div>
  );
}

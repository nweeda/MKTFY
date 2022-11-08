import React from "react";
import BasicButton from "../../components/buttons/BasicButton";
import "./login.css";
import Logo from "../../assets/MKTFYlogo.png";
import Page from "../muiTesting/grid.js";

function Login() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <img src={Logo} style={{ width: "235px", height: "88px" }} />
      <BasicButton style={{ display: "flex" }}>Login</BasicButton>
      <BasicButton>Create Account</BasicButton>
      <p>Find out more about us! Visit our website!</p>
    </div>
  );
}

export default Login;

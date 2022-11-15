import React, { useState } from "react";
import BasicButton from "../../components/buttons/BasicButton";
import "./login.css";
import Logo from "../../assets/MKTFYlogo.png";
import LoginModal from "../../components/modals/LoginModal";
//import Page from "../muiTesting/grid.js";

function Login() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="bg-img">
      <div className="login-container">
        <img
          src={Logo}
          style={{ width: "235px", height: "88px", marginBottom: "29px" }}
          alt="Logo"
        />
        <BasicButton
          style={{ display: "flex" }}
          className="openModalBtn"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          Login
        </BasicButton>
        {openModal && <LoginModal />}
        <BasicButton
          color="purple"
          // styles={{ marginTop: "18px" }}
          classNames="marginTopBut"
        >
          Create Account
        </BasicButton>
      </div>
      <span
        style={{
          color: "white",
          fontFamily: 'sans-serif "Comic Neue", cursive',
          fontWeight: "700",
          size: "16px",
        }}
      >
        Find out more about us!
      </span>
      <a href="http://google.com">
        <span
          style={{
            color: "#FFBA00",
            fontFamily: 'sans-serif "Comic Neue", cursive',
            fontWeight: "700",
            size: "16px",
          }}
        >
          {" "}
          Visit our website
        </span>
      </a>
    </div>
  );
}

export default Login;

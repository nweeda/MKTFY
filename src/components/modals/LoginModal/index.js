import { flexbox } from "@mui/system";
import { Modal } from "antd";
import { Content } from "antd/lib/layout/layout";
import { useState } from "react";
import React from "react";
import BasicButton from "../../buttons/BasicButton";

function LoginModal() {
  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close"> X </button>
        <button className="login-form">
          <label>Email</label>
          <br></br>
          <label>Password</label>
          <button>Forgot password</button>
          <BasicButton />
        </button>
      </div>
    </div>
  );
}

export default LoginModal;

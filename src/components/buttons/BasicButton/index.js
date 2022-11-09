import Link from "antd/lib/typography/Link";
import React from "react";
import "./basicButton.css";

function BasicButton(props) {
  //if props.color ===
  //else if props.color ===
  let buttonStyle = {
    // ...props.styles
  };
  //two ways:
  if (props.color === "purple") {
    buttonStyle.backgroundColor = "#6318AF";
  }

  let buttonClass = "bigBut";
  //if (props.color === "purple") {
  //buttonClass = buttonClass + " purpleButton";
  //}

  //console.log("buttonStyle: ", buttonStyle);
  //console.log("buttonClass: ", buttonClass);
  return (
    <button
      style={buttonStyle}
      className={buttonClass + (props.classNames ? " " + props.classNames : "")}
    >
      {props.children}
    </button>
  );
}

export default BasicButton;

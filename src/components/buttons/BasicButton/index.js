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
      onClick={() => {
        if (props.onClick){props.onClick()}
      }}
      //if we receive property called on click execute it as a function
    >
      {props.children}
    </button>
  );
}

export default BasicButton;

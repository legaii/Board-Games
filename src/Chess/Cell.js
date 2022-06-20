import React from "react";

export const Cell = (props) => {
  const style = {
    width: "50px",
    height: "50px",
    lineHeight: "50px",
    textAlign: "center",
    background: props.color,
    border:
      props.selected ?
      "3px solid yellow" :
      "1px solid #555",
  };

  return (
    <button style={style} onClick={props.onClick}>
      { props.owner &&
        <p style={{background: props.owner === "white" ?
          "red" : "blue"}}>{props.figure}</p> }
    </button>
  );
}

import React from "react";

export const Cell = (props) => {
  const divStyle = {
    width: "50px",
    height: "50px",
    display: "flex",
    alignItems: "center",
    background: props.color,
  };

  const figureStyle = {
    fontSize: "250%",
    margin: "auto",
    color:
      props.owner === "white" ?
      "#e94" : "black",
  };

  // https://en.wikipedia.org/wiki/Chess_symbols_in_Unicode
  const icons = {
    pawn:     "\u265F",
    babyPawn: "\u265F",
    knight:   "\u265E",
    bishop:   "\u265D",
    rook:     "\u265C",
    queen:    "\u265B",
    king:     "\u265A",
  };

  return (
    <div style={divStyle} onClick={props.onClick}>
      { props.owner &&
        <span style={figureStyle}>{icons[props.figure]}</span> }
    </div>
  );
}

import React from "react";

export const Board = ({ ctx, G, moves }) => {
  let winner = "";
  if (ctx.gameover) {
    winner = <div id="winner"> {
      ctx.gameover.winner !== undefined ?
      "Winner: " + ctx.gameover.winner :
      "Draw!"
    } </div>;
  }

  const cellStyle = {
    border: "1px solid #555",
    width: "50px",
    height: "50px",
    lineHeight: "50px",
    textAlign: "center",
  };

  let tbody = [];
  for (let i = 0; i < G.n; ++i) {
    let tr = [];
    for (let j = 0; j < G.n; ++j) {
      tr.push(<td key={i * G.n + j}> {
        G.cells[i][j] ?
        <div style={cellStyle}>{G.cells[i][j]}</div> :
        <button style={cellStyle} onClick={() => moves.clickCell(i, j)} />
      } </td>);
    }
    tbody.push(<tr key={i}>{tr}</tr>);
  }

  return (
    <div>
      <table id="board">
        <tbody>{tbody}</tbody>
      </table>
      {winner}
    </div>
  );
}

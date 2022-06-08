import React from "react";

export const TicTacToeBoard = ({ ctx, G, moves }) => {
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

  const n = 3;
  let tbody = [];
  for (let i = 0; i < n; ++i) {
    let tr = [];
    for (let j = 0; j < n; ++j) {
      const id = i * n + j;
      tr.push(<td key={id}> {
        G.cells[id] ?
        <div style={cellStyle}>{G.cells[id]}</div> :
        <button style={cellStyle} onClick={() => moves.clickCell(id)} />
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

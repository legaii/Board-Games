import React, { useState } from "react";
import { Cell } from "./Cell";

export const Board = ({ G, ctx, moves }) => {
  const color = (i, j) =>
    (i + j) % 2 === 0 ? "brown" : "#ddd";

  const [selected, setSelected] = useState(null);

  let tbody = [];
  for (let i = 0; i < G.N; ++i) {
    let tr = [];
    for (let j = 0; j < G.N; ++j) {
      tr.push(
        <td key={i * G.N + j}>
          <Cell
            {...G.cells[i][j]}
            color={color(i, j)}
            selected={
              selected !== null &&
              selected.i === i &&
              selected.j === j
            }
            onClick={
              selected === null ?
              setSelected.bind(null, {i, j}) :
              () => {
                moves.go(selected, {i, j});
                setSelected(null);
              }
            }
          />
        </td>
      );
    }
    tbody.push(<tr key={i}>{tr}</tr>);
  }

  return (
    <div>
      <table>
        <tbody>{tbody}</tbody>
      </table>
    </div>
  );
};

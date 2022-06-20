import { INVALID_MOVE } from "boardgame.io/core";

function IsVictory(G) {
  const positions = [];

  for (let i = 0; i < G.n; ++i) {
    const pos = [];
    for (let j = 0; j < G.n; ++j) {
      pos.push([i, j]);
    }
    positions.push(pos);
  }

  for (let j = 0; j < G.n; ++j) {
    const pos = [];
    for (let i = 0; i < G.n; ++i) {
      pos.push([i, j]);
    }
    positions.push(pos);
  }

  {
    const pos = [];
    for (let i = 0; i < G.n; ++i) {
      pos.push([i, i]);
    }
    positions.push(pos);
  }

  {
    const pos = [];
    for (let i = 0; i < G.n; ++i) {
      pos.push([i, G.n - i - 1]);
    }
    positions.push(pos);
  }

  const isRowComplete = row => {
    const symbols = row.map(([i, j]) => G.cells[i][j]);
    return symbols[0] !== null && symbols.every(s => s === symbols[0]);
  };

  return positions.some(isRowComplete);
}

function IsDraw(G) {
  return G.cells.every(row => row.every(c => c !== null));
}

export const Game = {
  setup: () => {
    const N = 5;
    return {
      n: N,
      cells: Array(N).fill(Array(N).fill(null)),
    };
  },

  turn: {
    minMoves: 1,
    maxMoves: 1,
  },

  moves: {
    clickCell: (G, ctx, i, j) => {
      if (G.cells[i][j] != null) {
        return INVALID_MOVE;
      }
      G.cells[i][j] = ctx.currentPlayer;
    },
  },

  endIf: (G, ctx) => {
    if (IsVictory(G)) {
      return { winner: ctx.currentPlayer };
    }
    if (IsDraw(G)) {
      return { draw: true };
    }
  },
};

import { TurnOrder, INVALID_MOVE, } from "boardgame.io/core";
import { N, start, rules, } from "./Rules.js";

export const Game = {
  setup: () => ({ N, cells: start }),

  turn : {
    order: TurnOrder.CUSTOM(["white", "black"]),
    minMoves: 1,
    maxMoves: 1,
  },

  moves: {
    go: (G, ctx, from, to) => {
      const fromCell = G.cells[from.i][from.j];
      const   toCell = G.cells[  to.i][  to.j];

      if (fromCell.owner !== ctx.currentPlayer ||
            toCell.owner === ctx.currentPlayer) {
        return INVALID_MOVE;
      }

      const figure = rules[fromCell.figure](
        toCell.figure === null ? "NORMAL" : "ATTACK",
        fromCell.owner, from.i, from.j).find(
          move =>
            from.i + move.i === to.i &&
            from.j + move.j === to.j)?.figure;

      if (figure === undefined) {
        return INVALID_MOVE;
      }

      toCell.owner = fromCell.owner;
      toCell.figure = figure;
      fromCell.owner = null;
      fromCell.figure = null;
    },
  },
};

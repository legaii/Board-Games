import { Client } from "boardgame.io/react";
// import { Game } from "./TicTacToe/Game";
// import { Board } from "./TicTacToe/Board";
import { Game } from "./Chess/Game";
import { Board } from "./Chess/Board";

const App = Client({
  game: Game,
  board: Board,
});

export default App;

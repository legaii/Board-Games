const N = 8;

const Cell = (owner, figure) => ({owner, figure});

const start = 
  new Array(N).fill(null).map(_ =>
    new Array(N).fill(null).map(_ =>
      Cell(null, null)
    )
  );

for (let i = 0; i < 2; ++i) {
  for (let j = 0; j < N; ++j) {
    start[i][j].owner = "black";
    start[N - i - 1][j].owner = "white";
  }
}

for (let j = 0; j < N; ++j) {
  start[1][j].figure = "babyPawn";
  start[N - 2][j].figure = "babyPawn";
}

start[0][0].figure = "rook";
start[0][1].figure = "knight";
start[0][2].figure = "bishop";
start[0][3].figure = "queen";
start[0][4].figure = "king";
start[0][5].figure = "bishop";
start[0][6].figure = "knight";
start[0][7].figure = "rook";

start[N - 1][0].figure = "rook";
start[N - 1][1].figure = "knight";
start[N - 1][2].figure = "bishop";
start[N - 1][3].figure = "queen";
start[N - 1][4].figure = "king";
start[N - 1][5].figure = "bishop";
start[N - 1][6].figure = "knight";
start[N - 1][7].figure = "rook";

const Move = (i, j, figure) => ({i, j, figure});

const pawn = (mode, owner, i) => {
  const moves = [];

  if (mode === "NORMAL") {
    moves.push(Move(-1,  0, "pawn"));
  } else {
    moves.push(Move(-1,  1, "pawn"));
    moves.push(Move(-1, -1, "pawn"));
  }

  const queenify = moves.forEach.bind(moves, (_, index) => {
    moves[index].figure = "queen";
  });

  if (owner === "black") {
    moves.forEach((_, index) => {
      moves[index].i *= -1;
    });

    if (i === N - 2) {
      queenify();
    }
  } else {
    if (i === 1) {
      queenify();
    }
  }

  return moves;
};

const babyPawn = (mode, owner, i) => {
  const moves = pawn(mode, owner, i);

  if (mode === "NORMAL") {
    moves.push(Move(owner === "white" ? -2 : 2, 0, "pawn"));
  }

  return moves;
};

const knight = () => [
  Move(-2,  1, "knight"),
  Move(-1,  2, "knight"),
  Move( 1,  2, "knight"),
  Move( 2,  1, "knight"),
  Move( 2, -1, "knight"),
  Move( 1, -2, "knight"),
  Move(-1, -2, "knight"),
  Move(-2, -1, "knight"),
];

const bishop = () => [
  Move( 1,  1, "bishop"),
  Move( 2,  2, "bishop"),
  Move( 3,  3, "bishop"),
  Move( 4,  4, "bishop"),
  Move( 5,  5, "bishop"),
  Move( 6,  6, "bishop"),
  Move( 7,  7, "bishop"),
  Move(-1, -1, "bishop"),
  Move(-2, -2, "bishop"),
  Move(-3, -3, "bishop"),
  Move(-4, -4, "bishop"),
  Move(-5, -5, "bishop"),
  Move(-6, -6, "bishop"),
  Move(-7, -7, "bishop"),
  Move( 1, -1, "bishop"),
  Move( 2, -2, "bishop"),
  Move( 3, -3, "bishop"),
  Move( 4, -4, "bishop"),
  Move( 5, -5, "bishop"),
  Move( 6, -6, "bishop"),
  Move( 7, -7, "bishop"),
  Move(-1,  1, "bishop"),
  Move(-2,  2, "bishop"),
  Move(-3,  3, "bishop"),
  Move(-4,  4, "bishop"),
  Move(-5,  5, "bishop"),
  Move(-6,  6, "bishop"),
  Move(-7,  7, "bishop"),
];

const rook = () => [
  Move( 0,  1, "rook"),
  Move( 0,  2, "rook"),
  Move( 0,  3, "rook"),
  Move( 0,  4, "rook"),
  Move( 0,  5, "rook"),
  Move( 0,  6, "rook"),
  Move( 0,  7, "rook"),
  Move( 0, -1, "rook"),
  Move( 0, -2, "rook"),
  Move( 0, -3, "rook"),
  Move( 0, -4, "rook"),
  Move( 0, -5, "rook"),
  Move( 0, -6, "rook"),
  Move( 0, -7, "rook"),
  Move( 1,  0, "rook"),
  Move( 2,  0, "rook"),
  Move( 3,  0, "rook"),
  Move( 4,  0, "rook"),
  Move( 5,  0, "rook"),
  Move( 6,  0, "rook"),
  Move( 7,  0, "rook"),
  Move(-1,  0, "rook"),
  Move(-2,  0, "rook"),
  Move(-3,  0, "rook"),
  Move(-4,  0, "rook"),
  Move(-5,  0, "rook"),
  Move(-6,  0, "rook"),
  Move(-7,  0, "rook"),
];

const queen = () => bishop().concat(rook()).map(
  move => ({...move, figure: "queen"}));

const king = () => [
  Move(-1,  0, "king"),
  Move(-1,  1, "king"),
  Move( 0,  1, "king"),
  Move( 1,  1, "king"),
  Move( 1,  0, "king"),
  Move( 1, -1, "king"),
  Move( 0, -1, "king"),
  Move(-1, -1, "king"),
];

const rules = { pawn, babyPawn, knight, bishop, rook, queen, king, };

export { N, start, rules, };

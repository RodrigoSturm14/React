export const TURNS = {
   X: '×',
   O: '○'
};

export const WINNER_COMBOS = [
   // jugadas horizontales
   [0, 1, 2],
   [3, 4, 5],
   [6, 7, 8],
   // jugadas verticales
   [0, 3, 6],
   [1, 4, 7],
   [2, 5, 8],
   // jugadas diagonales
   [0, 4, 8],
   [2, 4, 6]
];
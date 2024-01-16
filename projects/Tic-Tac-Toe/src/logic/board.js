import { WINNER_COMBOS } from "../constants.js";

export const checkWinner = (boardToCheck) =>{
   for(const combo of WINNER_COMBOS){
      const [a, b, c] = combo; // a, b y c son indices, q van a servir para evaluar las posiciones de boardToCheck, o sea 'newBoard'
      if(
         boardToCheck[a] && // si en la posicion a tiene algo diferente a null
         boardToCheck[a] === boardToCheck[b] &&
         boardToCheck[a] === boardToCheck[c]
         ){
         // devolver ganador
         return boardToCheck[a];
      }
   }
   // devolver si no hay ganador todavia
   return null;
};

export const checkEndGame = (newBoard) =>{
   return newBoard.every((square) => square !== null);
};
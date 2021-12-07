export interface Game {
  squares: Array<any>;
  setSquares: (squares: Array<any>) => void;
  nextPlayer: boolean;
  setNextPlayer: (nextPlayer: boolean) => void;
  winner?: boolean;
  setWinner: (winner: boolean) => void;
  display?: boolean;
  setDisplay: (display: boolean) => void;
}

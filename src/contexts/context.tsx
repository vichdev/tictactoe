import React, { createContext, useContext, useState } from 'react';
import { Game } from '../models/game';

export const GameContext = createContext<Game>({} as Game);

const Context: React.FC = ({ children }) => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [nextPlayer, setNextPlayer] = useState<boolean>(true);
  const [winner, setWinner] = useState<boolean>();
  const [display, setDisplay] = useState<boolean>(false);

  return (
    <GameContext.Provider
      value={{
        squares,
        setSquares,
        nextPlayer,
        setNextPlayer,
        winner,
        setWinner,
        display,
        setDisplay,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

function useGame() {
  const context = useContext(GameContext);

  if (!context) {
    throw new Error('O hook useGame deve ser usado como Provider.');
  }
  return context;
}

export { Context, useGame };

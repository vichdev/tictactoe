import React from 'react';
import { useGame } from '../../contexts/context';
import * as Styles from './styles';
import { IPropsSquares } from './types';

const Squares: React.FC<IPropsSquares> = ({ onClick, index, value }) => {
  const { squares, setSquares, nextPlayer, setNextPlayer, winner } = useGame();

  function handleClick() {
    if (squares[index]) return;
    if (winner) return;

    const newSquares = [...squares];
    newSquares[index] = nextPlayer ? 'X' : 'O';
    setSquares(newSquares);
    setNextPlayer(!nextPlayer);
  }

  return <Styles.Squares onClick={handleClick}>{value}</Styles.Squares>;
};

export default Squares;

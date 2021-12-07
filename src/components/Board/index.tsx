import React, { useEffect } from 'react';
import { useGame } from '../../contexts/context';
import * as Styles from './styles';
import Squares from '../Squares';
import Player from '../Player/index.';
import Reset from '../Reset';
import calculateWinner from '../../utils/calculateWinner';

const Board: React.FC = () => {
  const { squares, setSquares, setWinner, winner, display } = useGame();

  useEffect(() => {
    const winner = calculateWinner(squares);
    if (winner) {
      setWinner(winner);
    }
  }, [setWinner, squares]);

  function handleClick() {
    const newSquares = [...squares];
  }

  const itsATie =
    Object.values(squares).filter(Boolean).length === 9 && !winner;

  return (
    <Styles.BoardContainer>
      <Styles.GameTitle>TicTacToe</Styles.GameTitle>
      <Player />
      {(winner || itsATie) && (
        <Styles.WinnerContainer isOpen={!display}>
          {winner ? (
            <Styles.Winner>
              O vencedor é: <Styles.WinnerSpan>{winner}</Styles.WinnerSpan>
            </Styles.Winner>
          ) : (
            <Styles.Winner>Empate!</Styles.Winner>
          )}
        </Styles.WinnerContainer>
      )}

      <Styles.Board>
        {squares.map((value, index) => (
          <Squares
            key={index}
            onClick={handleClick}
            index={index}
            value={value}
          />
        ))}
      </Styles.Board>
      <Reset />
    </Styles.BoardContainer>
  );
};

export default Board;

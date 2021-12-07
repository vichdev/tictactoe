import React from 'react';
import { useGame } from '../../contexts/context';
import * as Styles from './styles';

const Reset: React.FC = () => {
  const { setSquares, setNextPlayer, setWinner, setDisplay } = useGame();

  function handleClick() {
    setSquares(Array(9).fill(null));
    setNextPlayer(true);
    setWinner(false);
    setDisplay(false);
  }
  return (
    <Styles.ResetContainer>
      <Styles.ResetButton onClick={handleClick}>Reset</Styles.ResetButton>
    </Styles.ResetContainer>
  );
};

export default Reset;

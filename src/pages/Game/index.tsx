import React from 'react';
import Board from '../../components/Board';
import * as Styles from './styles';

const Game: React.FC = () => {
  return (
    <Styles.GameWrapper>
      <Board />
    </Styles.GameWrapper>
  );
};

export default Game;

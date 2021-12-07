import React from 'react';
import { useGame } from '../../contexts/context';
import * as Styles from './styles';

const Player: React.FC = () => {
  const { nextPlayer } = useGame();
  return (
    <Styles.PlayerContainer>
      <Styles.Player>
        Player: <Styles.PlayerSpan>{nextPlayer ? 'X' : 'O'}</Styles.PlayerSpan>
      </Styles.Player>
    </Styles.PlayerContainer>
  );
};

export default Player;

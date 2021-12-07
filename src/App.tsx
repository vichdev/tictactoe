import React from 'react';
import { Context } from './contexts/context';
import Game from './pages/Game';
import { GlobalStyle } from './styles/GlobalStyles';

const App: React.FC = () => {
  return (
    <Context>
      <GlobalStyle />
      <Game />
    </Context>
  );
};

export default App;

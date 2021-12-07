import styled, { keyframes } from 'styled-components';

export const BoardContainer = styled.div`
  max-width: 640px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
`;

export const GameTitle = styled.h1`
  font-size: 75px;
  color: #ff5414;
  text-shadow: 2px 2px 5px #000;
`;

export const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const Winner = styled.h1`
  font-size: 25px;
  text-transform: uppercase;
`;

export const WinnerSpan = styled.span`
  color: #ff5414;
`;

export const WinnerAnimation = keyframes`
0% {opacity: 0.2;}
100% {opacity: 1;}
`;

export const WinnerContainer = styled.div<{ isOpen?: boolean }>`
  width: 300px;
  height: 200px;
  border-radius: 5%;
  background-color: #fff;
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  box-shadow: 2px 2px 15px 5px #ff5414;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 40%;
  animation-name: ${WinnerAnimation};
  animation-duration: 0.5s;
  transition: 0.5s ease;
  animation-fill-mode: forwards;
`;

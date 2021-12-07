import styled from 'styled-components';

export const ResetContainer = styled.div``;

export const ResetButton = styled.button`
  width: 150px;
  height: 50px;
  border: none;
  background-color: #c2c8ce;
  border: 2px solid #ff5414;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 700;
  transition: 0.3s ease;

  &:hover {
    background-color: #ff5414;
    border: 2px solid #000;
  }
  &:active {
    background-color: #000;
    color: #fff;
    position: relative;
    top: 2px;
  }
`;

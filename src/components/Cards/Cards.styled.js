import styled from 'styled-components';

const CardSectionWrapper = styled.div `
  display: flex;
  width: 80%;
  align-self: end;
  justify-self: center;
  justify-content: center;
  flex-flow: row wrap;
`;

const Card = styled.button `
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 12px;
    width: 160px;
    height: 200px;
    background-color: white;
    color: black;
    border: 2px solid black;
    border-radius: 6px;
    filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 1));

    &:active {
      filter: drop-shadow(0 0 0 rgba(0, 0, 0, 0));
    }
`;

export {
  CardSectionWrapper,
  Card,
};
import styled from 'styled-components';

const CardSectionWrapper = styled.main `
  display: flex;
  width: 80%;
`;

const Card = styled.main `
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 12px;
    width: 100px;
    height: 200px;
    background-color: white;
    color: black;
    border: 2px solid black;
    
`;

export {
  CardSectionWrapper,
  Card,
};
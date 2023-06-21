import styled from 'styled-components';

const TimerWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 60px;
    flex-shrink: 0;
    align-self: start;
    align-items: center;
    justify-content: center;
`;

const Button = styled.button `
    width: 120px;
    height: 60px;
`;

export {
    TimerWrapper,
    Button,
  };
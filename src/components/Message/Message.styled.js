import styled from 'styled-components';

const ChatBubble = styled.div `
    border-radius: 20px 20px 20px 0;
    padding: 15px;
    background-color: #7cc5d9;
    color: #1c2c4c;
    width: max-content;
    max-width: calc(100% - 50px);
    box-shadow: -2px 2px 1px 1px #4c768d;
    display: flex;
    align-items: flex-start;
    margin-bottom: 20px;
`;

export {
    ChatBubble,
  };
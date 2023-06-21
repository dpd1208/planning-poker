import styled from 'styled-components';

const ChatBoxWrapper = styled.div `
  width: 20%;
  color: white;
  font-size: 18px;
  font-weight: 600;
  padding: 6px;
  text-align: center;
`;

const MessagesWrapper = styled.div `
    padding: 30px;
    margin-bottom: 60px;
    text-align: left;
`;

export {
    ChatBoxWrapper,
    MessagesWrapper,
  };
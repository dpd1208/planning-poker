import React from "react";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  ChatBubble,
} from './Message.styled';

const Message = ({ message }) => {
  const [user] = useAuthState(auth);
  console.log(message.avatar);
  return (
    <ChatBubble
      className={`chat-bubble ${message.uid === user.uid ? "right" : ""}`}>
      <img
        className="chat-bubble__left"
        src={message.avatar}
        alt="user avatar"
      />
      <div className="chat-bubble__right">
        <p className="user-name">{message.name}</p>
        <p className="user-message">{message.text}</p>
      </div>
    </ChatBubble>
  );
};

export default Message;

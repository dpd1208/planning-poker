import React, { useState } from "react";
import PropTypes from 'prop-types';
import { auth, db } from "../../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledSubmitButton,
} from './SendMessage.styled';

const SendMessage = ({ scroll }) => {
  const [message, setMessage] = useState("");

  const sendMessage = async (event) => {
    event.preventDefault();
    if (message.trim() === "") {
      alert("Enter valid message");
      return;
    }
    const { uid, displayName, photoURL } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: message,
      name: displayName,
      avatar: photoURL,
      createdAt: serverTimestamp(),
      uid,
    });
    setMessage("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <StyledForm onSubmit={(event) => sendMessage(event)} className="send-message">
      <StyledLabel htmlFor="messageInput" hidden>
        Enter Message
      </StyledLabel>
      <StyledInput
        id="messageInput"
        name="messageInput"
        type="text"
        className="form-input__input"
        placeholder="type message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <StyledSubmitButton type="submit">Send</StyledSubmitButton>
    </StyledForm>
  );
};

SendMessage.propTypes = {
  className: PropTypes.string
};

SendMessage.defaultProps = {
  className: null,
};

export default SendMessage;

import React, { useState } from "react";
import { auth, db } from "../../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledSubmitButton,
} from './SendMessage.styled';
import { StyledButton } from "../Welcome/Welcome.styled";

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

export default SendMessage;

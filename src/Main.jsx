import React, { useRef } from "react";
import PropTypes from 'prop-types';
import ChatBox from "./components/ChatBox/ChatBox";
import Timer from './components/Timer/Timer';
import Cards from './components/Cards/Cards';
import SendMessage from "./components/SendMessage/SendMessage";
import {
  Wrapper,
} from './Main.styled';

const Main = ({ className, cards }) => {
    const scroll = useRef();
  return (
    <Wrapper
      className={className}>
        <Timer />
        <Cards cards={cards} />
        <ChatBox />
        {/* when a new message enters the chat, the screen scrolls down to the scroll div */}
        <span ref={scroll}></span>
        <SendMessage scroll={scroll} />
    </Wrapper>
  );
};

Main.propTypes = {
  className: PropTypes.string,
  cards: PropTypes.shape([]),
};

Main.defaultProps = {
  className: null,
  cards: ['?', '1', '2', '3', '5', '8', '13']
};

export default Main;

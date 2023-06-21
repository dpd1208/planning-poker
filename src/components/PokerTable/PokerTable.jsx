import React from "react";
import PropTypes from 'prop-types';
import Timer from "../Timer/Timer";
import Cards from "../Cards/Cards";
import Results from "../Results/Results";
import {
  PokerTableWrapper,
} from './PokerTable.styled';

const PokerTable = ({ cards }) => {
  return (
    <PokerTableWrapper>
      <Timer />
      <Results />
      <Cards cards={cards} />
    </PokerTableWrapper>
  );
};

PokerTable.propTypes = {
  className: PropTypes.string
};

PokerTable.defaultProps = {
  className: null,
};

export default PokerTable;

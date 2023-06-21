import React from "react";
import PropTypes from 'prop-types';
import {
  PokerTableWrapper,
} from './PokerTable.styled';

const PokerTable = () => {
  return (
    <PokerTableWrapper>
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

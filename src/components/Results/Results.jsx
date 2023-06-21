import React from "react";
import PropTypes from 'prop-types';
import {
    ResultsWrapper,
} from './Results.styled';

const Results = () => {
  return (
    <ResultsWrapper>

    </ResultsWrapper>
  );
};

Results.propTypes = {
  className: PropTypes.string
};

Results.defaultProps = {
  className: null,
};

export default Results;

import React from 'react';
import PropTypes from 'prop-types';
import JSONPretty from 'react-json-pretty';

const ViewResults = ({ data }) => (
  <section>
    <h2>Results</h2>
    <JSONPretty data={data}></JSONPretty>
  </section>
);

ViewResults.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ViewResults;

import React from 'react';
import JSONPretty from 'react-json-pretty';

const ViewResults = ({ data }) => (
  <section>
    <h2>Results</h2>
    <JSONPretty data={data}></JSONPretty>
  </section>
);

export default ViewResults;

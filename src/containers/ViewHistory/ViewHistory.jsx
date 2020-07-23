import React from 'react';
import PropTypes from 'prop-types';

const ViewHistory = ({ history }) => (
  <section>
    <h2>Request History</h2>
    <div>
      <ul>
        {
          history.map((request, i) => (
            <li key={i}>
              <p>{request.requestType}</p>
              <p>{request.url}</p>
            </li>
          ))
        }
      </ul>
    </div>
  </section>
);

ViewHistory.propTypes = {
  history: PropTypes.array.isRequired
};

export default ViewHistory;

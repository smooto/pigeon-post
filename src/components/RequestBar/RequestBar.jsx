import React from 'react';
import PropTypes from 'prop-types';
import Button from '../MethodButton/Button';

const RequestBar = ({ onUrlChange, onTypeChange, onBodyChange, onSubmit }) => (
  <>
    <form onSubmit={onSubmit}>
      <label>
        URL for the API
        <input type="url" name="url" onChange={onUrlChange} />
      </label><br />

      <label>
        Raw JSON body (for POST or PUT requests)
        <input type="textarea" name="body" onChange={onBodyChange} />
      </label><br />

      <label>
        Request type
        <Button value={'GET'} handleClick={onTypeChange} />
        <Button value={'POST'} handleClick={onTypeChange} />
        <Button value={'PUT'} handleClick={onTypeChange} />
        <Button value={'DELETE'} handleClick={onTypeChange} />
        {/* <input
          type="button"
          name="requestType"
          onClick={onTypeChange}
          value="GET" />
        <input
          type="button"
          name="requestType"
          onClick={onTypeChange}
          value="POST" />
        <input
          type="button"
          name="requestType"
          onClick={onTypeChange}
          value="PUT" />
        <input
          type="button"
          name="requestType"
          onClick={onTypeChange}
          value="DELETE" /> */}
      </label><br />

      <input type="submit" />
    </form>
  </>
);

RequestBar.propTypes = {
  onUrlChange: PropTypes.func.isRequired,
  onTypeChange: PropTypes.func.isRequired,
  onBodyChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default RequestBar;

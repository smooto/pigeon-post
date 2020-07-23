import React from 'react';

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
        <input
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
          value="DELETE" />
      </label><br />

      <input type="submit" />
    </form>
  </>
);

export default RequestBar;

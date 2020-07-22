import React from 'react'

const RequestBar = ({ onUrlChange, onTypeChange, onSubmit }) => (
  <>
    <form onSubmit={onSubmit}>
      <input type="url" name="url" onChange={onUrlChange} />
      <input type="button" name="requestType" onClick={onTypeChange} value="GET" />
      <input type="button" name="requestType" onClick={onTypeChange} value="POST" />
      <input type="button" name="requestType" onClick={onTypeChange} value="PUT" />
      <input type="button" name="requestType" onClick={onTypeChange} value="DELETE" />
      <input type="submit" />
    </form>
  </>
);

export default RequestBar;

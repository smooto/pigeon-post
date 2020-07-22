import React from 'react'

const RequestBar = ({ onChange, onClick, onSubmit }) => (
  <>
    <form onSubmit={onSubmit}>
      <input type="url" name="url" onChange={onChange} />
      <input type="button" name="requestType" onClick={onClick} value="GET" />
      <input type="button" name="requestType" onClick={onClick} value="POST" />
      <input type="button" name="requestType" onClick={onClick} value="PUT" />
      <input type="button" name="requestType" onClick={onClick} value="DELETE" />
      <input type="submit" />
    </form>
  </>
);

export default RequestBar;

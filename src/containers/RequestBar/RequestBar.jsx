import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MultiButtons from '../../components/MultiButtons/MultiButtons';

const RequestBar = ({ passData, passRequest }) => {
  const [url, setUrl] = useState('');
  const [requestType, setRequestType] = useState('GET');
  const [body, setBody] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    passRequest({ url, requestType });

    fetch(url, options(requestType, body))
      .then(res => res.json())
      .then(json => passData(json));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          URL for the API
          <input type="url" name="url" onChange={e => setUrl(e.target.value)} />
        </label><br />

        <label>
          Raw JSON body (for POST or PUT requests)
          <input type="textarea" name="body" onChange={e => setBody(e.target.value)} />
        </label><br />

        <MultiButtons label={'Method'} values={['GET', 'POST', 'PUT', 'DELETE']} passValue={value => setRequestType(value)} />

        <input type="submit" />
      </form>
    </>
  );
};

const options = (method, body) => {
  const object = {
    method,
    headers: {
      'Content-Type': 'application/json'
    }
  };

  if(method === 'GET') return object;

  object.body = body;

  // console.log(object);

  return object;
};

RequestBar.propTypes = {
  passData: PropTypes.func.isRequired,
  passRequest: PropTypes.func.isRequired
};

export default RequestBar;

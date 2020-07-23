import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RequestBar from '../../components/RequestBar/RequestBar';

const MakeRequest = ({ passData, passRequest }) => {
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

  return <section>
    <h2>New Request</h2>
    <RequestBar
      onUrlChange={e => setUrl(e.target.value)}
      onTypeChange={e => setRequestType(e.target.value)}
      onBodyChange={e => setBody(e.target.value)}
      onSubmit={e => handleSubmit(e)} />
  </section>;
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

MakeRequest.propTypes = {
  passData: PropTypes.func.isRequired,
  passRequest: PropTypes.func.isRequired
};

export default MakeRequest;

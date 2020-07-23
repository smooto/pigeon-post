import React, { useState } from 'react';
import RequestBar from '../../components/RequestBar/RequestBar';

const MakeRequest = ({ passData, passRequest }) => {
  const [url, setUrl] = useState('');
  const [requestType, setRequestType] = useState('GET');

  const handleSubmit = (e) => {
    e.preventDefault();

    passRequest({ url, requestType });

    fetch(url, { method: requestType })
      .then(res => res.json())
      .then(json => passData(json));
  };

  return <section>
    <h2>New Request</h2>
    <RequestBar
      onUrlChange={e => setUrl(e.target.value)}
      onTypeChange={e => setRequestType(e.target.value)}
      onSubmit={e => handleSubmit(e)} />
  </section>;
};

export default MakeRequest;

import React, { useState } from 'react';
import RequestBar from '../../components/RequestBar/RequestBar';

const MakeRequest = () => {
  const [url, setUrl] = useState('');
  const [requestType, setRequestType] = useState('');

  const [data, setData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(url)
      .then(res => res.json())
      .then(json => setData(json));
  };

  return <section>
    <h2>New Request</h2>
    <RequestBar
      onChange={e => setUrl(e.target.value)}
      onClick={e => setRequestType(e.target.value)}
      onSubmit={e => handleSubmit(e)} />
  </section>;
};

export default MakeRequest;

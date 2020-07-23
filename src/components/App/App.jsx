import React, { useState } from 'react';
import styles from './App.css';
import MakeRequest from '../../containers/MakeRequest/MakeRequest';
import ViewHistory from '../../containers/ViewHistory/ViewHistory';
import ViewResults from '../../containers/ViewResults/ViewResults';

export default function App() {
  const [data, setData] = useState([]);
  const [history, setHistory] = useState([]);

  return <div className={styles.App}>
    <MakeRequest
      passData={data => setData(data)}
      passRequest={request => setHistory(history.concat(request))}
    />
    <ViewHistory history={history} />
    <ViewResults data={data} />
  </div>;
}

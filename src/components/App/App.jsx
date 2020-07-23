import React, { useState } from 'react';
import styles from './App.css';
import MakeRequest from '../../containers/MakeRequest/MakeRequest';
import ViewHistory from '../../containers/ViewHistory/ViewHistory';
import ViewResults from '../../containers/ViewResults/ViewResults';

export default function App() {
  const [data, setData] = useState([]);

  return <div className={styles.App}>
    <MakeRequest passBack={data => setData(data)} />
    <ViewHistory />
    <ViewResults data={data} />
  </div>;
}

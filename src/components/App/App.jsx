import React, { useState } from 'react';
import styles from './App.css';
import MakeRequest from '../../containers/MakeRequest/MakeRequest';
import ViewHistory from '../../containers/ViewHistory/ViewHistory';
import ViewResults from '../../containers/ViewResults/ViewHistory';

export default function App() {
  const [data, setData] = useState(null);

  return <div className={styles.App}>
    <MakeRequest passBack={data => setData(data)} />
    <ViewHistory />
    <ViewResults />
  </div>;
}

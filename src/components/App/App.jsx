import React from 'react';
import styles from './App.css';
import MakeRequest from '../../containers/MakeRequest/MakeRequest';
import ViewHistory from '../../containers/ViewHistory/ViewHistory';
import ViewResults from '../../containers/ViewResults/ViewHistory';

export default function App() {
  return <div className={styles.App}>
    <MakeRequest />
    <ViewHistory />
    <ViewResults />
  </div>;
}

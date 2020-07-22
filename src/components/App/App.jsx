import React from 'react';
import styles from './App.css';

export default function App() {
  return <div className={styles.App}>
    <section>
      <h2>New Request</h2>
      <form>
        <input type="url" />
        <input type="button" value="GET" />
        <input type="button" value="POST" />
        <input type="button" value="PUT" />
        <input type="button" value="DELETE" />
        <input type="submit" />
      </form>
    </section>
    
    <section>
      <h2>Request History</h2>
      <div>
        <ul>
          <li>
            example request url
          </li>
          <li>
            example request url
          </li>
        </ul>
      </div>
    </section>

    <section>
      <h2>Results</h2>
      <div>
        {/* <pre>
          "example": {
            "json" : "here's some example JSON"
          }
        </pre> */}
      </div>
    </section>
  </div>;
}

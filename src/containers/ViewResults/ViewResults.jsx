import React from 'react';

const ViewResults = ({ data }) => (
  <section>
    <h2>Results</h2>
    <ul>
      {
        // data.map(result => <h1>{result.quote}</h1>)
        data.map((object, i) => {
          return <li key={'result ' + i}>
            <ul>
              {
                Object.keys(object).map((key, i) => {
                  return <li key={i}>
                    {key} : {object[key]};
                  </li>;
                })
              }
            </ul>
          </li>;
        })
      }
    </ul>
  </section>
);

export default ViewResults;

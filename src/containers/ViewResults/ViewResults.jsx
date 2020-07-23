import React from 'react';

const ViewResults = ({ data }) => (
  <section>
    <h2>Results</h2>
    <ul>
      [<br />
      {
        prettify(data)
        // data.map((object, i) => (
        //   <li key={'result ' + i}>
        //     <ul>
        //       { getKeyValues(object) }
        //     </ul>
        //   </li>
        // ))
      }
      ]
    </ul>
  </section>
);

const prettify = (data) => (
  data.map((object, i) => (
    <li key={'result ' + i}>
      &#123;<br />
      <ul>
        { getKeyValues(object) }
      </ul>
      &#125;
    </li>
  ))
);

const getKeyValues = (object) => (
  Object.keys(object).map((key, i) => (
    <li key={i}>
      <code>
        {`${key} : ${object[key]},`}
      </code>
    </li>
  ))
);

export default ViewResults;

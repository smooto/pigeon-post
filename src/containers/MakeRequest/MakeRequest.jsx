import React from 'react';

const MakeRequest = () => (
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
);

export default MakeRequest;

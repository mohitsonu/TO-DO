import React from 'react';

function Motivation({ message }) {
  return (
    <div className="motivation">
      <h2>Daily Motivation</h2>
      <p>{message}</p>
    </div>
  );
}

export default Motivation;

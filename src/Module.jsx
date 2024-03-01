// Module.js
import React from 'react';

const Module = ({ title, link }) => {
  return (
    <div className="modules mt-8">
      <div><i>{title}</i><br /></div>
      <div className="button"><a href={link} target="_blank" rel="noopener noreferrer">download</a></div>
    </div>
  );
}

export default Module;

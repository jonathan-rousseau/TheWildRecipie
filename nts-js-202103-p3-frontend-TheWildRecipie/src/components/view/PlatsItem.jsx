/* eslint-disable react/prop-types */
import React from 'react';

function PlatsItem(props) {
  const { name, description } = props;

  return (
    <div className="background">
      <div className="box-item">
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default PlatsItem;

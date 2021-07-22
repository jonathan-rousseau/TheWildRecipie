/* eslint-disable react/prop-types */
import React from 'react';

function PlatsItem(props) {
  const { name, description } = props;

  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  );
}

export default PlatsItem;

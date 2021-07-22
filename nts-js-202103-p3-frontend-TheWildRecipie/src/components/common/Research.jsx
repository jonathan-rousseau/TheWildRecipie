/* eslint-disable react/prop-types */
import React from 'react';
import './Research.css';

function Research(props) {
  const { setSearch, search } = props;
  return (
    <div>
      <input
        className="search-input"
        value={search}
        type="text"
        placeholder="Entrez un mot clef..."
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
    </div>
  );
}

export default Research;

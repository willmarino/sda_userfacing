import React from 'react';

const HeaderButton = (props) => {
  const { destinationPath, labe } = props;
  <div onClick={() => {window.location.hash = `#/${destinationPath}`}}>
    <p>{label}</p>
  </div>
}
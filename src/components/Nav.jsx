import React from 'react';

const navFlex = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
};

function Nav() {
  return (
    <div style={navFlex}>
      <div>
        <h1>React.Taps</h1>
      </div>
      <div>
        <ul style={navFlex}>
          <li><a>Edit Beers</a></li>
          <li><a>Add New Beers</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;

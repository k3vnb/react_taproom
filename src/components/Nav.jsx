import React from 'react';

const navFlex = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: '1px solid black',
  padding: '1% 4%',
  backgroundColor: '#6495ed6e'
};

function Nav() {
  return (
    <div style={navFlex}>
      <h1>React.Taps</h1>
      <a>Edit Beers</a>
      <a>Add New Beers</a>
    </div>
  );
}

export default Nav;

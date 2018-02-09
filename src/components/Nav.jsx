import React from 'react';
import { Link } from 'react-router-dom';
import Edit from './Edit';

const navFlex = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: '1px solid black',
  padding: '1% 4%',
  backgroundColor: '#6495ed6e',
  textDecoration: 'none'
};


function Nav() {
  return (
    <div style={navFlex}>
      <style jsx global>{`
          a {
            text-decoration: none;
          }`}</style>
      <h1><Link to='/'>React.Taps</Link></h1>
      <Link to='/edit'>Edit Beers</Link>
      <Link to='/addnew'>Add New Beers</Link>
    </div>
  );
}

export default Nav;

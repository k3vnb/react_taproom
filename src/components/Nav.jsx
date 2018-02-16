import React from 'react';
import { Link } from 'react-router-dom';


const navFlex = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: '1px solid black',
  padding: '1% 4%',
  backgroundColor: '#eec49f',
  textDecoration: 'none'
};


function Nav() {
  return (
    <div style={navFlex}>
      <style jsx>{`
          a {
            text-decoration: none;
            color: black;
          }`}</style>
      <h1><Link to='/'>React.Taps</Link></h1>
      <Link to='/edit'>Edit Beers</Link>
      <Link to='/addnew'>Add New Beers</Link>
    </div>
  );
}

export default Nav;

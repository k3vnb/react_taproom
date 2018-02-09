import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import Edit from './Edit';
import BeerList from './BeerList';
import { Switch, Router } from 'react-router-dom';

function App(){
  return (
    <div>
      <Nav />
      <BeerList />
      <Edit />
      <Footer />
    </div>
  );
}

export default App;

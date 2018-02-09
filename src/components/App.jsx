import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import Edit from './Edit';
import BeerList from './BeerList';
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path='/' component={BeerList} />
        <Route path='/edit' component={Edit} />
        <Route path='/addnew' component={Edit} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

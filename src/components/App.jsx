import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import Edit from './Edit';
import BeerList from './BeerList';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path='/' component={BeerList} />
        <Route path='/edit' component={Edit} />
        <Route path='/addnew' component={Edit} />
        <Route component={Error404} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

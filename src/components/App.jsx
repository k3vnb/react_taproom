import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import Edit from './Edit';
import BeerList from './BeerList';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterBeerList: []
    };
    this.handleAddingNewBeerToList = this.handleAddingNewBeerToList.bind(this);
  }

  handleAddingNewBeerToList(newBeer){
    let newMasterBeerList = this.state.masterBeerList.slice();
    newMasterBeerList.push(newTicket);
    this.setState({masterBeerList: newMasterBeerList});
  }
  render() {
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
}

export default App;

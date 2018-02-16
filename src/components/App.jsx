import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import Edit from './Edit';
import AddBeer from './AddBeer';
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
    newMasterBeerList.push(newBeer);
    this.setState({masterBeerList: newMasterBeerList});
    console.log(this.state.masterBeerList);
  }
  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <Route exact path='/' render={()=><BeerList beerList={this.state.masterBeerList} />} />
          <Route path='/edit' component={Edit} />
          <Route path='/addnew' render={() =><AddBeer onAddingNewBeerToList={this.handleAddingNewBeerToList} />}/>
          <Route component={Error404} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;

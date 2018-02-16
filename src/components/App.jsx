import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import AddBeer from './AddBeer';
import EditBeerList from './EditBeerList';
import wallpaper from './../wallpaper.jpg';
import pint from './../pint.png';
import porter from './../porter.png';
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
    console.table(this.state.masterBeerList);
  }



  render() {
    const outerDiv = {
      height: '80vh',
      width: '100%',
      backgroundColor: 'lightgrey',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundImage: `url(${wallpaper})`,
      backgroundSize: 'cover'
    };
    const innerDiv = {
      display: 'flex',
      justifyContent: 'space-between',
      backgroundColor: 'white',
      height: '60%',
      width: '60%',
      padding: '5%',
      marginLeft: 100,
      boxShadow: '1px 1px 1px black',
    };
    return (
      <div>
        <Nav />
        <Switch>
          <Route exact path='/' render={()=><BeerList beerList={this.state.masterBeerList} />} />
          <div style={outerDiv}>
            <style jsx>{`
                img {
                  height: 100%;
                  transition: transform .5s;
                }
                img:hover {
                  transform: scale(1.05);
                }`}</style>
            <div style={innerDiv}>
              <img src={pint}/>
              <Route path='/edit' component={EditBeerList} />
              <Route path='/addnew' render={() =><AddBeer onAddingNewBeerToList={this.handleAddingNewBeerToList} />}/>
              <img src={porter}/>
            </div>
          </div>
          <Route component={Error404} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;

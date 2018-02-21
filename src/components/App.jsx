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
      masterBeerList: {
        '0' : {
          title: 'Ipsum',
          brand: 'Lorem',
          price: '$5.00',
          abv: '6.4%',
          amount: 32,
          id: '0'
        },
        '1' : {
          title: 'Git Porter',
          brand: 'Nth Child Brewing',
          price: '$6.60',
          abv: '8.4%',
          amount: 29,
          id: '1'
        }
      },
      selectedBeer: null
    };
    this.handleAddingNewBeerToList = this.handleAddingNewBeerToList.bind(this);
    this.handleChangingSelectedBeer = this.handleChangingSelectedBeer.bind(this);
  }

  handleAddingNewBeerToList(newBeer){
    let newMasterBeerList = Object.assign({}, this.state.masterBeerList, {[newBeer.id]: newBeer});
    // newMasterBeerList.push(newBeer);
    this.setState({masterBeerList: newMasterBeerList});
    console.table(this.state.masterBeerList);
  }

  handleChangingSelectedBeer(beerId) {
    alert(`hello ${this.masterBeerList}`);
    this.setState({selectedBeer: beerId});
  }



  render() {
    const outerDiv = {
      height: '100vh',
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
                  transform: scale(1.01);
                }`}</style>
            <div style={innerDiv}>
              <img src={pint}/>
              <Route path='/edit' render={(props)=><EditBeerList beerList={this.state.masterBeerList} currentRouterPath={props.location.pathname}
                onBeerSelection={this.handleChangingSelectedBeer}
                selectedBeer={this.state.selectedBeer}/>} />
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

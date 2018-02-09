import React from 'react';
import wallpaper from './../wallpaper.jpg';
import EditBeerList from './EditBeerList';
import AddBeer from './AddBeer';
import { Switch, Router } from 'react-router-dom';

const outerDiv = {
  height: '80vh',
  width: '100%',
  backgroundColor: 'lightgrey',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundImage: `url(${wallpaper})`,
  backgroundSize: 'cover'
}
const innerDiv = {
  backgroundColor: 'white',
  height: '60%',
  width: '60%',
  padding: '5%',
  marginLeft: 100,
  boxShadow: '1px 1px 1px black'
}

function Edit() {
  if (window.location.href.indexOf('edit') > -1){
    return(
      <div style={outerDiv}>
        <div style={innerDiv}>
          <EditBeerList />
        </div>
      </div>
    );
  } else if (window.location.href.indexOf('addnew') > -1){
    return(
      <div style={outerDiv}>
        <div style={innerDiv}>
          <AddBeer />
        </div>
      </div>
    );
  }
}

export default Edit;

import React from 'react';
import wallpaper from './../wallpaper.jpg';
import EditBeerList from './EditBeerList';
import AddBeer from './AddBeer';
import pint from './../pint.png';
import porter from './../porter.png';
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
};
const innerDiv = {
  display: 'flex',
  backgroundColor: 'white',
  height: '60%',
  width: '60%',
  padding: '5%',
  marginLeft: 100,
  boxShadow: '1px 1px 1px black',
};

function Edit() {
  if (window.location.href.indexOf('edit') > -1){
    return(
      <div style={outerDiv}>
        <style jsx global>{`
            img {
              height: 100%;
              margin-left: 100px;
              transition: transform .5s;
            }
            img:hover {
              transform: scale(1.01);
            }`}</style>
        <div style={innerDiv}>
          <EditBeerList />
          <img src={pint}/>
        </div>
      </div>
    );
  } else if (window.location.href.indexOf('addnew') > -1){
    return(
      <div style={outerDiv}>
        <style jsx global>{`
            img {
              height: 100%;
              margin-left: 100px;
            }`}</style>
        <div style={innerDiv}>
          <AddBeer />
          <img src={porter}/>
        </div>
      </div>
    );
  }
}

export default Edit;

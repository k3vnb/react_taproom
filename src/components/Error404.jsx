import React from 'react';
import confused from './../assets/confused.jpg';
import { Link } from 'react-router-dom';

const error404 = {
  padding: '5%',
  marginLeft: 100
};
const confusedImg = {
  borderRadius: '50%',
  height: '30vh',
  width: '20vw',
  boxShadow: '1px 1px 1px black',
  marginLeft: 50
};

function Error404(){
  return(
    <div style={error404}>
      <img style={confusedImg} src={confused}/>
      <h1>error 404</h1>
      <h2>Oops! You're not supposed to be here</h2>
      <h3>Go back to the <Link to='/'>homepage</Link></h3>
    </div>
  );
}

export default Error404;

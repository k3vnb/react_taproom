import React from 'react';
import PropTypes from 'prop-types';

const beerDetail = {
  border: '1px solid black',
  padding: '0 4%',
  marginLeft: 20,
  marginBottom: 20,
  marginTop: -40
};

function BeerDetail(props) {
  return(
    <div style={beerDetail}>
      <h2>{props.selectedBeer.title}</h2>
      <h3>{props.selectedBeer.brand}</h3>
      <h4>{props.selectedBeer.price} | {props.selectedBeer.abv}</h4>
      <h5>Amount left: {props.selectedBeer.amount}</h5>
    </div>
  );
}

BeerDetail.propTypes = {
  selectedBeer: PropTypes.object
};

export default BeerDetail;

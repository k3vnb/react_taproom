import React from 'react';
import PropTypes from 'prop-types';

function BeerDetail(props) {
  return(
    <div>
      <h2>{props.selectedBeer.title}</h2>
      <h3>{props.selectedBeer.brand}</h3>
      <h4>{props.selectedBeer.price} | {props.selectedBeer.abv}</h4>
      <h5>Amount left: {props.selectedBeer.amount}</h5>
    </div>
  );
}

BeerDetail.propTypes = {
  selectedBeer: PropTypes.string
};

export default BeerDetail;

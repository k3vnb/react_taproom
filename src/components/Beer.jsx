import React from 'react';
import PropTypes from 'prop-types';

function Beer(props) {
  return(
    <div>
      <ul>
        <li>props.title</li>
        <li>props.brand</li>
        <li>props.price</li>
        <li>props.abv</li>
        <li>props.amount</li>
      </ul>
    </div>
  );
}

Beer.propTypes = {
  title: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  abv: PropTypes.string,
  amount: PropTypes.number
}

export default Beer;

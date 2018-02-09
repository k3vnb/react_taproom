import React from 'react';
import PropTypes from 'prop-types';


function Beer(props) {
  return(
    <div>
      <style jsx global>{`
          ul {
            list-style: none;
          }
          .beer-label {
            font-size: 10px;
            font-weight: bold;
          }
            `}</style>
      <ul>
        <li><span className='beer-label'>Beer: </span> {props.title}</li>
        <li><span className='beer-label'>Brand: </span> {props.brand}</li>
        <li><span className='beer-label'>Price: </span>{props.price}</li>
        <li><span className='beer-label'>ABV: </span>{props.abv}</li>
        <li><span className='beer-label'>Amount Left: </span> {props.amount}</li>
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
};

export default Beer;

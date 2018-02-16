import React from 'react';
import PropTypes from 'prop-types';


function AddBeer(props) {
  let _title = null;
  let _brand = null;
  let _abv = null;
  let _price = null;

  function handleNewBeerFormSubmission(event) {
    event.preventDefault();
    console.log(_abv.value);
    props.onAddingNewBeerToList({title: _title.value, brand: _brand.value, abv: _abv.value, price: _price.value});
    _title.value = '';
    _brand.value = '';
    _abv.value = '';
    _price.value = '';
  }


  return(
    <div>
      <style jsx>{`
          input {
            margin-left: 20px;
            margin-bottom: 15px;
            border: none;
            border-bottom: 1px solid grey;
            height: 20px;
            width: 100%;
          }
          button {
            background-color: #6363f1db;
            height: 40px;
            width: 100%;
            color: white;
            font-size: 15px;
            text-shadow: .5px .5px 1px black;
            box-shadow: 1px 1px 1px black;
          }`}</style>
      <form onSubmit={handleNewBeerFormSubmission}>
        <label>Title:</label><input
          placeholder='beer title'
          type='text'
          id='title'
          ref={(input) => {_title = input;}}/><br/>
        <label>Brand:</label><input
          placeholder='beer brand'
          type='text'
          id='brand'
          ref={(input) => {_brand = input;}}/><br/>
        <label>ABV:</label><input
          placeholder="e.g. '5.2%'"
          type='text'
          id='abv'
          ref={(input) => {_abv = input;}}/><br/>
        <label>Price:</label><input
          placeholder='price per pint'
          type='text'
          id='price'
          ref={(input) => {_price = input;}}/><br/>
        <button type="submit">Add New Beer</button>
      </form>
    </div>
  );
}

AddBeer.propTypes = {
  onAddingNewBeerToList: PropTypes.func
};

export default AddBeer;

import React from 'react';

function AddBeer() {
  return(
    <div>
      <form>
        <label>Title:</label><input placeholder='beer title'></input>
        <label>Brand:</label><input placeholder='beer brand'></input>
        <label>ABV:</label><input placeholder="e.g. '5.2%'"></input>
        <label>Price:</label><input placeholder='price per pint'></input>
        <button>Add Beer</button>
      </form>
    </div>
  );
}

export default AddBeer;

import React from 'react';

function AddBeer() {
  return(
    <div>
      <style jsx global>{`
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
      <form>
        <label>Title:</label><input placeholder='beer title' /><br/>
        <label>Brand:</label><input placeholder='beer brand' /><br/>
        <label>ABV:</label><input placeholder="e.g. '5.2%'" /><br/>
        <label>Price:</label><input placeholder='price per pint' /><br/>
        <button>Add New Beer</button>
      </form>
    </div>
  );
}

export default AddBeer;

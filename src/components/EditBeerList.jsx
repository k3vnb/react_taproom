import React from 'react';
import PropTypes from 'prop-types';
import BeerList from './BeerList';

function EditBeerList(props) {
  return(
    <div>
      <style jsx>{`
          ul {
            list-style: none;
          }
          li {
            margin: 5px 0;
          }
          li:hover {
            text-decoration: underline;
          }
          img {
            transform: scale(.5);
          }
          .columns {
            display: flex;
            object-fit: cover;
          }`}</style>
      <h5>Select Beer to Edit:</h5>

      <BeerList beerList={props.beerList} currentRouterPath={props.currentRouterPath}/>

    </div>
  );
}

EditBeerList.propTypes = {
  beerList: PropTypes.array,
  currentRouterPath: PropTypes.string.isRequired
};

export default EditBeerList;

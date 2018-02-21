import React from 'react';
import PropTypes from 'prop-types';
import BeerList from './BeerList';
import BeerDetail from './BeerDetail';

function EditBeerList(props) {
  let optionalSelectedBeerContent = null;
  if (props.selectedBeer != null){
    optionalSelectedBeerContent = <BeerDetail selectedBeer={props.selectedBeer}/>;
  }
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
      {optionalSelectedBeerContent}
      <BeerList beerList={props.beerList} currentRouterPath={props.currentRouterPath}
        onBeerSelection={props.onBeerSelection}/>

    </div>
  );
}

EditBeerList.propTypes = {
  beerList: PropTypes.array,
  currentRouterPath: PropTypes.string.isRequired,
  onBeerSelection: PropTypes.func.isRequired,
  selectedBeer: PropTypes.object
};

export default EditBeerList;

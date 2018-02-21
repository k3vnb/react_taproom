import React from 'react';
import PropTypes from 'prop-types';
import BeerList from './BeerList';
import BeerDetail from './BeerDetail';

function EditBeerList(props) {
  let optionalSelectedBeerContent = null;
  if (props.selectedBeer != null){
    optionalSelectedBeerContent = <BeerDetail selectedBeer={props.beerList[props.selectedBeer]}/>;
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
      {optionalSelectedBeerContent}
      <h5>Select Beer to Edit:</h5>
      <BeerList beerList={props.beerList}
        currentRouterPath={props.currentRouterPath}
        onBeerSelection={props.onBeerSelection}/>
    </div>
  );
}

EditBeerList.propTypes = {
  beerList: PropTypes.object,
  currentRouterPath: PropTypes.string.isRequired,
  onBeerSelection: PropTypes.func.isRequired,
  selectedBeer: PropTypes.string
};

export default EditBeerList;

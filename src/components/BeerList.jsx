import React from 'react';
import PropTypes from 'prop-types';
import Beer from './Beer';
import mug from './../mug.png';
import banner from './../banner.jpg';


function BeerList(props) {
  return(
    <div className='container'>
      <style jsx>{`
          .container {
            background-repeat: no-repeat;
            background-position: 120% 20%;
            min-height: 175vh;
            margin-top: 65px;
            background-image: url(${mug});
          }
          .card-container-div {
            display: flex;
            margin-left: 8vh;
            flex-direction: column;
            flex-wrap: wrap;
            max-height: 120vh;
            justify-content: flex-start;
            padding: 2%;
          }
          .beer-card {
            padding-right: 10%;
            width: 25%;
            height: 30%;
            border: 1px solid black;
            background-color: #efac7296;
            margin-bottom: 3vh;
            box-shadow: .5px .5px 1px #af6969cc;
            transition: transform .1s;
          }
          .beer-card:hover {
            background: linear-gradient(-45deg, #efac7296 0%,#f5ab66 20%,#efac7296 100%);
            box-shadow: 2px 3px 4px #af6969cc;
            transform: scale(1.05);
          }
          h2 {
            padding: 5%;
            margin-top: -1px;
            font-family: 'Kanit', sans-serif;
          }
          `}</style>
      <h2>Our Current Beers:</h2>
      <div className='beer-card'>
        {Object.keys(props.beerList).map(function(beerId) {
          let beer = props.beerList[beerId];

          return <div className='card-container-div'><Beer
            title={beer.title}
            brand={beer.brand}
            price={beer.price}
            abv={beer.abv}
            amount={beer.amount}
            key={beer.id}
            currentRouterPath={props.currentRouterPath}
            onBeerSelection={props.onBeerSelection}
          /> </div>;

        })}
      </div>
    </div>
  );
}

BeerList.propTypes = {
  beerList: PropTypes.object,
  currentRouterPath: PropTypes.string,
  onBeerSelection: PropTypes.func
};

export default BeerList;

import React from 'react';
import PropTypes from 'prop-types';
import Beer from './Beer';
import banner from './../banner.jpg';


function BeerList(props) {
  return(
    <div className='container'>
      <style jsx>{`
          .container {
            background: linear-gradient(-45deg, #fac695 0%,#f5ab66 47%,#ef8d31 100%);
            min-height: 90vh;
          }
          .card-container-div {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            padding: 2%;
          }
          .beer-card {
            padding-right: 10%;
            border: 1px solid black;
            background-color: #eec49f;
            margin-bottom: 3vh;
            box-shadow: .5px .5px 1px grey;
            transition: transform .1s;
          }
          .beer-card:hover {
            background-color: white;
            box-shadow: 1px 2px 3px grey;
            transform: scale(1.05);
          }
          h2 {
            padding: 5%;
            margin-top: -1px;
          }
          img {
            width: 100%;
            position: fixed;
            bottom: -130px;
          }
          `}</style>
      <h2>Our Current Beers</h2>
      <div className='card-container-div'>
        {props.beerList.map((beer) =>
          <div className='beer-card'>
            <Beer
              title={beer.title}
              brand={beer.brand}
              price={beer.price}
              abv={beer.abv}
              amount={beer.amount}
              key={beer.id}
            />
          </div>
        )}
      </div>
      <img src={banner}/>
    </div>
  );
}

BeerList.propTypes = {
  beerList: PropTypes.array
};

export default BeerList;


// let beerListArray = [
//   {
//     title: 'Wormwood',
//     brand: 'Big Sal',
//     price: '$6.00',
//     abv: '5.4%',
//     amount: 54
//   },
//   {
//     title: 'Ipsum',
//     brand: 'Lorem',
//     price: '$5.00',
//     abv: '6.4%',
//     amount: 32
//   },
//   {
//     title: 'Git Porter',
//     brand: 'Nth Child Brewing',
//     price: '$6.60',
//     abv: '8.4%',
//     amount: 29
//   },
//   {
//     title: 'Red Ale',
//     brand: 'Drop Top',
//     price: '$6.00',
//     abv: '6.4%',
//     amount: 15
//   },
//   {
//     title: 'Saison',
//     brand: 'Base Camp',
//     price: '$6.00',
//     abv: '6.7%',
//     amount: 32
//   },
//   {
//     title: 'Winter Ale',
//     brand: 'Gigantic Brewing',
//     price: '$6.50',
//     abv: '6.5%',
//     amount: 9
//   }
// ];

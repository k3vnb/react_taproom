import React from 'react';
import Beer from './Beer';

let beerListArray = [
  {
    title: 'Wormwood',
    brand: 'Big Sal',
    price: '$6.00',
    abv: '5.4%',
    amount: 54
  },
  {
    title: 'Ipsum',
    brand: 'Lorem',
    price: '$5.00',
    abv: '6.4%',
    amount: 32
  },
  {
    title: 'Git Porter',
    brand: 'Nth Child Brewing',
    price: '$6.60',
    abv: '8.4%',
    amount: 29
  }
];


function BeerList() {
  return(
    <div>
      <style jsx global>{`
          .card-container-div {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            padding: 2%;
          }
          .beer-card {
            padding-right: 10%;
            border: 1px solid black;
            box-shadow: .5px .5px 1px grey;
          }
          .beer-card:hover {
            background-color: pink;
            box-shadow: 1px 2px 3px grey;
          }
          `}</style>
      <h2>Our Current Beers</h2>
      <div className='card-container-div'>
        {beerListArray.map((beer, index) =>
          <div className='beer-card'>
            <Beer
              title={beer.title}
              brand={beer.brand}
              price={beer.price}
              abv={beer.abv}
              amount={beer.amount}
              key={index}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default BeerList;

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
      <h2>Our Current Beers</h2>
      <div>
        {beerListArray.map((beer, index) =>
          <div>
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

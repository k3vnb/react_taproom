import React from 'react';
import Beer from './beer';

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
]


function BeerList() {
  return(
    <div>
      Beerlist Works
    </div>
  );
}

export default BeerList;

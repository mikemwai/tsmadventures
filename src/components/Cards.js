import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Explore the beautiful Karura Forest in Nairobi, Kenya.'
              label='Adventure'
              path='/updates'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Travel through the Mombasa Island in a Private Cruise.'
              label='Luxury'
              path='/updates'
            />
            <CardItem
              src='images/img-7.jpg'
              text='Travel through Kenya without any limitations.'
              label='Freedom'
              path='/updates'
            />
          </ul>
          {/* <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Set Sail in the Indian Ocean visiting Uncharted Waters.'
              label='Mystery'
              path='/updates'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience Football on top of Lamu.'
              label='Adventure'
              path='/updates'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Turkana Desert on a guided camel tour.'
              label='Adrenaline'
              path='/updates'
            />
          </ul> */}
        </div>
      </div>
    </div>
  );
}

export default Cards;
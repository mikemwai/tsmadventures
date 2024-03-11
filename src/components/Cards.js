import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { Button } from './Button';

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
              path='/karura'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Travel through the Mombasa Island in a Private Cruise.'
              label='Luxury'
              path='/karura'
            />
            <CardItem
              src='images/img-7.jpg'
              text='Travel through Kenya without any limitations.'
              label='Freedom'
              path='/karura'
            />
          </ul>
        </div>
        <Button className='btns' buttonStyle='btn--secondary' buttonSize='btn--large' buttonLink='/updates' style={{marginLeft: '1000px' }}>
            CHECK OUT MORE UPDATES</Button>
      </div>
    </div>
  );
}

export default Cards;
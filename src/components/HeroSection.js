/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  const images = [
    'images/img-home.jpg',
    'images/img-8.jpg',
    'images/img-9.jpg',
    'images/img-2.jpg'
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 10000); 

    return () => clearInterval(timer); 
  }, [currentImageIndex, images.length]);

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
  };

  return (
    <div className='hero-container' style={{ backgroundImage: `url(${images[currentImageIndex]})` }}>
      <button className='arrow left' onClick={prevImage}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button className='arrow right' onClick={nextImage}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      <div className='image-indicator'>
        {images.map((image, index) => (
          <div key={index} className={`circle ${index === currentImageIndex ? 'active' : ''}`}></div>
        ))}
      </div>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <h1>ADVENTURE AWAITS</h1>
      <p>Enjoy the Magical Kenya experience!</p>
      <br />
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          buttonLink='/contact'
        >
          GET STARTED
        </Button>
        <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
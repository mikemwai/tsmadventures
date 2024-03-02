import React from 'react';
import '../../App.css';
import Footer from '../Footer';

function AboutUs() {
  return (
    <>
      <h1 className="about-us">ABOUT US</h1>
      <div className="about-us-container">
      <h1 className="about-us-heading1">TSM Adventures</h1>
        <div className="about-us-content">
        <img src={process.env.PUBLIC_URL + '/images/about-photo.png'} alt="About us" className="about-us-image" />
        <p className="about-us-text">Welcome to TSM Adventures, a venture that was started by three young entrepreneurs: Peter Gathiru, Shalom Waiyego, and Mercy Mwende. 
        TSM Adventures operates within the tourism industry.</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;
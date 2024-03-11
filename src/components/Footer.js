/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer
() {
  return (
    <div className='footer-container'>
        <section className="footer-subscription">
            <p className="footer-subscription-heading">
              Subscribe for the newsletter to receive our best vacation deals
            </p>
            {/* <p className="footer-subscription-text">
              Unsubscribe here.
            </p> */}
            <div className="input-areas">
                <form>
                    <input type="email" name="email" placeHolder="Your Email" className="footer-input" />
                    <Button buttonStyle='btn--outline'>Subscribe</Button>
                </form>
            </div>
        </section>
        <div className="footer-links">
                <div className='footer-link-wrapper'>
                    {/* <div class='footer-link-items'>
                        <h2 style={{ textDecoration: 'underline' }}>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div> */}
                    <div class='footer-link-items'>
                        <h2 style={{ textDecoration: 'underline' }}>Contact Us</h2>
                        <Link to='/contact'>Contact</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Destinations</Link>
                        <Link to='/'>Sponsorships</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2 style={{ textDecoration: 'underline' }}>Videos</h2>
                        <Link to='/'>Submit Video</Link>
                        <Link to='/'>Ambassadors</Link>
                        <Link to='/'>Agency</Link>
                        <Link to='/'>Influencer</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2 style={{ textDecoration: 'underline' }}>Social Media</h2>
                        <Link to='/'><FontAwesomeIcon icon={faInstagram} /> Instagram</Link>
                        <Link to='/'><FontAwesomeIcon icon={faFacebook} /> Facebook</Link>
                        <Link to='/'><FontAwesomeIcon icon={faYoutube} /> Youtube</Link>
                        <Link to='/'><FontAwesomeIcon icon={faTwitter} /> Twitter</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    {/* <div className="footer-logo">
                        <Link to='/' className="social-logo">
                            tsmadventures <i className="fab fa-typo3"></i>
                        </Link>
                    </div> */}
                    <div className="footer-logo"></div>
                    <small className="website-rights">tsmaventures © {new Date().getFullYear()}</small>
                    <div className="social-icons">
                        <Link className="social-icon-link facebook" to="/" target="_blank" aria-label="Facebook">
                            <i className="fab-fa-facebook-f"></i>
                        </Link>
                        <Link className="social-icon-link instagram" to="/" target="_blank" aria-label="Instagram">
                            <i className="fab-fa-instagram"></i>
                        </Link>
                        <Link className="social-icon-link twitter" to="/" target="_blank" aria-label="Twitter">
                            <i className="fab-fa-twitter"></i>
                        </Link>
                        <Link className="social-icon-link youtube" to="/" target="_blank" aria-label="Youtube">
                            <i className="fab-fa-youtube"></i>
                        </Link>
                        <Link className="social-icon-link linkedin" to="/" target="_blank" aria-label="LinkedIn">
                            <i className="fab-fa-linkedin"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
  )
}

export default Footer

import React from 'react';
import '../../App.css';
import Footer from '../Footer';

function Contact() {
    return (
        <>
            <h1 className="contact">CONTACT US</h1>
            <div className="contact-us-container">
                <div className="contact-us-content">
                    <img src="images/contact.jpg" alt="Contact us" className="contact-us-image" />
                    <div className="contact-details">
                        <h1 style={{ textDecoration: 'underline' }}><strong>TSM Adventures - Head Office</strong></h1>
                        <p><strong>Phone:</strong> +254 799 360 245</p>
                        <p><strong>Email:</strong> info@tsmadventures.com</p>
                        <p><strong>Area:</strong> Embakasi</p>
                        <p><strong>County:</strong> Nairobi</p>
                        <p><strong>Country:</strong> Kenya</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Contact;
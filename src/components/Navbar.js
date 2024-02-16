/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
    <nav className="navbar">
        <div className="navbar-container">
            <Link to="/" className="navbar-logo">
                tsmadventures <i className="fab fa-typo3"></i>
            </Link>
        </div>
    </nav>
    </>
  )
}

export default Navbar
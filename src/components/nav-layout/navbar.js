import React from 'react';
import { Link } from 'react-router-dom';
import SignedOutLinks from './signed-out-links';
import SignedInLinks from '../../store/containers/signed-in-nav';

const Navbar = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo left">Marathon Pets</Link>
                <SignedInLinks />
                <SignedOutLinks />
            </div>
        </nav>
    )
}

export default Navbar;
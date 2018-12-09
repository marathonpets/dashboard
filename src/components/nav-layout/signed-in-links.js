import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to="/signin">Log In</NavLink></li>
            <li><NavLink to="/signup">Sign Up</NavLink></li>
            <li><NavLink to="/" className="btn btn-floating pink lighten-1">BF</NavLink></li>
        </ul>
    )
}

export default SignedInLinks;
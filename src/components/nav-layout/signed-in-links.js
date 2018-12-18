import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = (props) => {
    console.log('signed in links updated', props);
    return (
        <ul className="right">
            <li><NavLink to={'/dashboard/' + props.username }>Dashboard</NavLink></li>
            <li><button className="clean-button" onClick={props.logOutUser}>Log Out</button></li>
            <li><NavLink to="/account" className="btn btn-floating pink lighten-1">BF</NavLink></li>
        </ul>
    )
}

export default SignedInLinks;

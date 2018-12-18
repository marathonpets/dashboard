import React, { Component } from 'react'
import { resetPassword } from '../../store/actions/link-actions';

export class Account extends Component {
    render (props) {
        const { username, resetPassword } = this.props;
        console.log('account props', this.props);
        return (
            <div className="center">
                User Account for { username }.
                <br />
                <button onClick={() => {resetPassword()} }>Reset Password</button>
            </div>
        );
    }
}

export default Account
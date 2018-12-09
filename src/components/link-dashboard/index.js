import React, { Component } from 'react'
import SignInCard from '../link-cards/signin-card'
import SignUpCard from '../link-cards/signup-card'
import ConnectCard from '../link-cards/connect-card'

export class Link extends Component {
    render () {
        return(
            <div className="card-dashboard container">
                <div className="row">
                    <div className="card-container ">
                        {/* <SignInCard /> */}
                        <ConnectCard />
                    </div>
                </div>
            </div>
        )
    }
}

export default Link;
import React, { Component } from 'react'
// import { connect } from 'react-redux';
import SignInCard from '../link-cards/signin-card'
import SignUpCard from '../link-cards/signup-card'
import ConnectCard from '../link-cards/connect-card'

class Link extends Component {
    render () {
        console.log('link dashboard', this.props);
        console.log('link actions', this.props.signInUser);
        return (
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

// const mapStateToProps = (state) => {
//     console.log('mapStateToProps', state);
//     return {
//         link: state.link.users
//     }
// }

// export default connect(mapStateToProps)(Link);

export default Link;


import React, { Component } from 'react'
// import { connect } from 'react-redux';
import LogInCard from '../../store/containers/login-card'
import SignUpCard from '../../store/containers/signup-card'
import ConnectCard from '../../store/containers/connect-card'

class Link extends Component {
    render () {
        console.log('link dashboard', this.props);
        // console.log('link actions', this.props.signInUser);
        return (
            <div className="card-dashboard container">
                <div className="row">
                    <div className="card-container ">
                        <LogInCard />
                        {/* <ConnectCard /> */}
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


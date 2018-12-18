import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ConnectCard from '../../components/link-cards/connect-card';
import { logInUser, signUpUser, logOutUser, resetPassword, connectWheel } from '../actions/link-actions'
// import { hasSignedIn } from '../selectors';

const mapStateToProps = (state) => {
    // const { uid } = props;

    return {
        data: state.link.users
        // hasSignedIn: hasSignedIn(state)
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({
        logInUser,
        signUpUser,
        logOutUser,
        resetPassword,
        connectWheel
    }, dispatch);
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ConnectCard);
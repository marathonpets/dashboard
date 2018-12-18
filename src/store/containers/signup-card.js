import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SignUpCard from '../../components/link-cards/signup-card';
import { logInUser, signUpUser, logOutUser, resetPassword } from '../actions/link-actions'
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
        resetPassword
    }, dispatch);
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUpCard);
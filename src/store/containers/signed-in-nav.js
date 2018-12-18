import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SignedInLinks from '../../components/nav-layout/signed-in-links';
import { logOutUser } from '../actions/link-actions'
import { getUserName } from '../selectors';

const mapStateToProps = (state) => {
    console.log('state', state, getUserName(state));
    return {
        username: getUserName(state)
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({
        logOutUser
    }, dispatch);
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignedInLinks);
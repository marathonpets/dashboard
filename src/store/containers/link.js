import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Link from '../../components/link-dashboard';
import { signInUser } from '../actions/link-actions'
// import { hasSignedIn } from '../selectors';

const mapStateToProps = (state) => {
    // const { uid } = props;

    return {
        link: state.link.users
        // hasSignedIn: hasSignedIn(state)
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({
        signInUser
    }, dispatch);
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);
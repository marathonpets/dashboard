import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Account from '../../components/auth/account';
import { resetPassword } from '../actions/link-actions'
import { getUserName, getWheelId } from '../selectors';

const mapStateToProps = (state) => {
    return {
        username: getUserName(state),
        wheelId: getWheelId(state)
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({
        resetPassword
    }, dispatch);
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Account);
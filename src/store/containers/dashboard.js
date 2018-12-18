import { get } from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Dashboard from '../../components/dashboard';
import { fetchCurrentWheelData } from '../actions/dashboard-actions'
import { getWheelId } from '../selectors';
// import { firebaseConnect } from 'react-redux-firebase';

const mapStateToProps = (state) => {
    console.log('dashboard mapState', state);
    return {
        wheelId: getWheelId(state),
        currentStats: state.dashboard.currentStats || {},
        tripStats: state.dashboard.tripStats || {}
        // current_rpm: get(state, 'dashboard.currentWheelData.current_rpm'),
        // distance_ft: get(state, 'dashboard.currentWheelData.distance_ft'),
        // duration: get(state, 'dashboard.currentWheelData.duration'),
        // revolutions: get(state, 'dashboard.currentWheelData.revolutions')
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({
        fetchCurrentWheelData
    }, dispatch);
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);
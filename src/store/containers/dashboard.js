import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import Dashboard from '../../components/dashboard';
// import { handleButtonClick } from '../actions/app'
// import { hasSignedIn } from '../selectors';

const mapStateToProps = (state) => {
    return {
        dashboard: state.dashboard
    };
}

// const mapDispatchToProps = (dispatch, ownProps) => {
//     return bindActionCreators({
//         // handleClick: (someProp) => handleButtonClick(someProp)
//     }, dispatch);
// };

export default connect(
    mapStateToProps
)(Dashboard);
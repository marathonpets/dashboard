import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { handleButtonClick } from '../actions/app'
// import { hasSignedIn } from '../selectors';

const mapStateToProps = (state, props) => {
    const { uid } = props;

    return {
        uid,
        // hasSignedIn: hasSignedIn(state)
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({
        // handleClick: (someProp) => handleButtonClick(someProp)
    }, dispatch);
};

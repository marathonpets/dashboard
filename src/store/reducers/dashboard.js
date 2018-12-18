import C from '../../constants';

export default (state = {}, action) => {
    switch (action.type) {
        case C.CURRENT_STATS:
            return {
                currentStats: action.result,
                ...state
            }
        case C.TRIP_STATS:
            return {
                tripStats: action.result,
                ...state
            }
        default:
            return state;
    }
}

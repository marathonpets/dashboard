// import { CURRENT_STEP, SOMETHING_ELSE } from '../../constants';
const initState = {
    users: [
        { uid: '123' },
        { uid: '' }
    ]
}

export default (state = initState, action) => {
    // return state;
    switch (action.type) {
        // case CURRENT_STEP:
        //     return {

        //     }   
        // case SOMETHING_ELSE:
        //     return {
        //         ...state
        //     }
        default:
            return state;
    }
}

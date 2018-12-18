import C from '../../constants';
const initState = {
    // users: [
    //     { uid: '123' },
    //     { uid: '' }
    // ]
}

export default (state = initState, action) => {
    console.log('link reducer', action.type, action.result);
    switch (action.type) {
        case C.AUTH_CHANGED:
            return {
                ...state,
                firebaseUserData: action.result,
            }
        case C.UPDATE_PROFILE:
            return {
                ...state,
                profileData: action.result,
            }
        default:
            return state;
    }
}

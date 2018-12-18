import C from '../../constants';
const initState = {
    // users: [
    //     { uid: '123' },
    //     { uid: '' }
    // ]
}

export default (state = initState, action) => {
    console.log('link reducer', action.type);
    switch (action.type) {
        case C.AUTH_CHANGED:
            return {
                firebaseUserData: action.result,
                ...state
            }
        case C.UPDATE_PROFILE:
            return {
                profileData: action.result,
                ...state
            }
        default:
            return state;
    }
}

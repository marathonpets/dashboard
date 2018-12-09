import { SIGN_IN } from '../../constants';

export const signInUser = (action) => {
    return {
        type: SIGN_IN,
        result: action
    }
}


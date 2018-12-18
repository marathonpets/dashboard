import { get } from 'lodash';
import { wheelsRef, profilesRef, usernamesRef } from '../../config/fbConfig';
import C from '../../constants';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

export const logInUser = (credentials) => (dispatch, getState) => {
    // const state = getState();
    // const auth = state.firebase.auth();
    const auth = firebase.auth();
    const email = credentials.email;
    const password = credentials.password;
    console.log('logInUser called', email, password);
    const promise = auth.signInWithEmailAndPassword(email, password);

    promise.catch(e => {
        console.log('my error is', e.message);
    });
}

export const signUpUser = (credentials) => (dispatch, getState) => {
    const auth = firebase.auth();
    const email = credentials.email;
    const password = credentials.password;
    const username = credentials.username;

    const promise = auth.createUserWithEmailAndPassword(email, password).then(e => {
        const user = auth.currentUser;
        user.sendEmailVerification().then(e => {
            console.log('verification email sent');
        }).catch(e => {
            console.log(e.message);
        });
        
        user.updateProfile({
            displayName: username,
            photoURL: ''
        }).then(e => {
            console.log('profile updated')

            credentials['uid'] = user.uid;
            credentials['wheelId'] = '';
            const { password, ...noPassword } = credentials;
            firebase.database().ref('profiles/' + username).set({
                ...noPassword
            }).then(e => {
                dispatch({
                    type: C.UPDATE_PROFILE,
                    result: noPassword
                })  
            });
        }).catch(e => {
            console.log(e.message);
        });
    });
    promise.catch(e => {
        console.log('my error is', e.message);
    });
}

export const fetchUserProfile = (credentials) => (dispatch, getState) => {
    console.log('fetchUserProfile')
    firebase.database().ref('profiles/' + credentials.username).once('value', (snap) => {
        console.log('fetchUserProfile', snap.val())
        dispatch({
            type: C.UPDATE_PROFILE,
            result: snap.val()
        })  
    });
}

export const connectWheel = (credentials) => (dispatch, getState) => {
    const auth = firebase.auth()
    const user = auth.currentUser;
    const wheelId = credentials.wheelNumber;
    profilesRef.child(user.displayName).once('value', (snap) => {
        console.log('profilesRef', snap.val());
    });

    profilesRef.child(user.displayName).update({'wheel_id': wheelId});
}

export const logOutUser = (action) => (dispatch, getState) => {
    const auth = firebase.auth()
    auth.signOut();

    console.log('user signed out');
}

export const resetPassword = (action) => (dispatch, getState) => {
    const auth = firebase.auth()
    console.log('auth email', auth, auth.currentUser);
    const email = get(auth, 'currentUser.email');
    if (email) {
        auth.sendPasswordResetEmail(email).then(e => {
            console.log('email sent to', email);
        }).catch(e => {
            console.log(e.message);
        });
    }
}

export const authChanged = (firebaseUser) => (dispatch, getState) => {
    console.log('authChanged', firebaseUser);
    dispatch({
        type: C.AUTH_CHANGED,
        result: firebaseUser
    });
};

export default logInUser;
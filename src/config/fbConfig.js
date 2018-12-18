import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import C from '../constants';
import { fetchUserProfile } from '../store/actions/link-actions';
let database;

const config = {
    apiKey: "AIzaSyASIwqr4yOXjwDWI59_6_cr8y9ctkFxENg",
    authDomain: "marathon-dashboard.firebaseapp.com",
    databaseURL: "https://marathon-dashboard.firebaseio.com",
    projectId: "marathon-dashboard",
    storageBucket: "marathon-dashboard.appspot.com",
    messagingSenderId: "367491713233"
};

export const rrfConfig = {
    userProfile: 'users' // root that user profiles are written to
}

// export const initFirebase = () => {
    firebase.initializeApp(config);
    database = firebase.database();
// }

export const stateChangeListener = (store) => {
    const { dispatch } = store;
    console.log('stateChangeListener', dispatch);
    firebase.auth().onAuthStateChanged(firebaseUser => {
        console.log('auth changed');
        if (firebaseUser) {
            const email = firebase.auth().currentUser.email;
            const username = firebase.auth().currentUser.displayName;
            console.log(`success: your logged in as ${email}`);
            console.log('firebaseUser', firebaseUser);
            dispatch({
                type: C.AUTH_CHANGED,
                result: firebaseUser
            });
            // console.log('fetch profile');
            // fetchUserProfile(username);
            firebase.database().ref('profiles/' + username).once('value', (snap) => {
                console.log('fetchUserProfile', snap.val());
                dispatch({
                    type: C.UPDATE_PROFILE,
                    result: snap.val()
                })  
            });
        } else {
            console.log('user NOT signed in')
            dispatch({
                type: C.AUTH_CHANGED,
                result: {}
            });
            dispatch({
                type: C.UPDATE_PROFILE,
                result: {}
            })  
        }
    });
}

export const wheelsRef = database.ref('/wheels');
export const profilesRef = database.ref('/profiles');

export const graph = () => {
    // const currentDB = database.ref().child('Wheel1');
    const currentDB = database.ref('/');
    currentDB.once('value', snap => {
        const currentRPM = snap.val();
        console.log('currentRPM', currentRPM);
        return currentRPM;
    });

}

export const showSection = () => {
    graph();
    wheelsRef.on('value', (snap) => {
        console.log('wheelsRef', snap.val());
    });
    profilesRef.on('value', (snap) => {
        console.log('profilesRef', snap.val());
    });
}

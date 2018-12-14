import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
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

export const initFirebase = () => {
    firebase.initializeApp(config);
    database = firebase.database();
}

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
}
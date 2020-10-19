
import _firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
    apiKey: "AIzaSyBP0gvFfU6ky_H2DbhMApsqGD2A72IXKMg",
    authDomain: "towhidportfolioapp.firebaseapp.com",
    databaseURL: "https://towhidportfolioapp.firebaseio.com",
    projectId: "towhidportfolioapp",
    storageBucket: "towhidportfolioapp.appspot.com",
    messagingSenderId: "365493099263",
    appId: "1:365493099263:web:a64205c9ebc56c78388aca",
    measurementId: "G-BE319187TS"
};

// Initialize Firebase
let firebase = _firebase.initializeApp(config);

export default firebase;

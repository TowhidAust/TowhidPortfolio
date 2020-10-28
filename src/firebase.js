// This import loads the firebase namespace along with all its type information.
import * as firebase from "firebase/app";

// These imports load individual services into the firebase namespace.

import "firebase/auth";
import "firebase/database";
import "firebase/storage";

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

firebase.initializeApp(config);


// Export the database, auth and firebase timestamp seperately for convenience
export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const serverTimestamp = firebase.database.ServerValue.TIMESTAMP;

export default firebase;

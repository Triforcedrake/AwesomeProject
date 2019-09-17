
import Firebase from 'firebase';

let config = {
    apiKey: "Insert Api and rest of configuration here",
    authDomain: "----",
    databaseURL: "-----",
    projectId: "-----",
    storageBucket: "------",
    messagingSenderId: "-----"
};
let app = Firebase.initializeApp(config);
export const db = app.database();

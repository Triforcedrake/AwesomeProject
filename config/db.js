
import Firebase from 'firebase';

let config = {
    apiKey: "AIzaSyC02Mx0TmUsBaM1R7XCA9mG3Y1YQ6IZcs4",
    authDomain: "awesomeproject-1548233775133.firebaseapp.com",
    databaseURL: "https://awesomeproject-1548233775133.firebaseio.com",
    projectId: "awesomeproject-1548233775133",
    storageBucket: "awesomeproject-1548233775133.appspot.com",
    messagingSenderId: "931119102286"
};
let app = Firebase.initializeApp(config);
export const db = app.database();
import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCiXE5C5y6qpEZdD7TRpyAFyVe4nySTLws",
  authDomain: "redux-pro-organiser.firebaseapp.com",
  databaseURL: "https://redux-pro-organiser.firebaseio.com",
  projectId: "redux-pro-organiser",
  storageBucket: "redux-pro-organiser.appspot.com",
  messagingSenderId: "198170774651",
  appId: "1:198170774651:web:e723ccb963caa5a3bee6de",
};
// Initialize Firebase
export const fire = firebase.initializeApp(firebaseConfig);

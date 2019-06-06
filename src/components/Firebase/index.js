import firebase from "firebase";
import "firebase/storage";

// const { apiKey, authDomain, databaseURL, projectID, storageBucket, messagingSenderId, appId } = process.env;

var config = {
  apiKey: "AIzaSyDTfvLc2kYMpwnoXCxMXndgcCLyGYopvR0",
  authDomain: "ezparking-app.firebaseapp.com",
  databaseURL: "https://ezparking-app.firebaseio.com",
  projectId: "ezparking-app",
  storageBucket: "ezparking-app.appspot.com",
  messagingSenderId: "461640877747",
  appId: "1:461640877747:web:9693f9c3c560261c"
};

// firebase.initializeApp(apiKey, authDomain, databaseURL, projectID, storageBucket, messagingSenderId, appId);

export const fireBaseApp = firebase.initializeApp(config);

export const storage = firebase.storage();
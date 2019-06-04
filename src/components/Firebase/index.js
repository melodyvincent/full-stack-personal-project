import firebase from 'firebase/app'
import 'firebase/storage'


const { apiKey, authDomain, databaseURL, projectID, storageBucket, messagingSenderId, appId } = process.env;


firebase.initializeApp(process.env);

const storage = firebase.storage();

export {storage, firebase as default
}
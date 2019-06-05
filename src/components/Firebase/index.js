import firebase from 'firebase/app'
import 'firebase/storage'


const { apiKey, authDomain, databaseURL, projectID, storageBucket, messagingSenderId, appId } = process.env;


firebase.initializeApp(apiKey, authDomain, databaseURL, projectID, storageBucket, messagingSenderId, appId);

const storage = firebase.storage();

export {storage, firebase as default
}
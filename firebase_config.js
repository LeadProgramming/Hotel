import firebase from 'firebase';
// import 'firebase/auth';
// import 'firebase/firebase';
// import 'firebase/storage';

export const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    // if (location.hostname === "localhost") {
    //     firebase.firestore().useEmulator("http://localhost:8080");
    //     firebase.auth().useEmulator("http://localhost:9099");
    // }
}
export default firebase;
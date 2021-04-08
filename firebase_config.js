import firebase from 'firebase';

export const firebaseConfig = {
    apiKey: "AIzaSyARob1Ja2jTzCVLT9QF6eBOakuXWCVL1e8",
    authDomain: "hotel-3c249.firebaseapp.com",
    projectId: "hotel-3c249",
    storageBucket: "hotel-3c249.appspot.com",
    messagingSenderId: "745011087359",
    appId: "1:745011087359:web:714fff5e51447cc5c489ca",
    measurementId: "G-5XYXP89Z22"
};
// Configure FirebaseUI.
// export const uiConfig = {
//     // Popup signin flow rather than redirect flow.
//     // signInFlow: 'popup',
//     // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
//     signInSuccessUrl: '/rooms',
//     // We will display Google and Facebook as auth providers.
//     signInOptions: [
//         firebase.auth.EmailAuthProvider.PROVIDER_ID,
//     ]
// };
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    // if (location.hostname === "localhost")
    //     firebase.firestore().useEmulator("localhost", 8080);
}
const fireApp = firebase;
export default fireApp;
import { initializeApp } from 'firebase/app';
import { deleteUser, getAuth, GithubAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { addUser } from '../features/githubUser/githubUserSlice';
import { TOKEN } from '../App';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

// instantiate github auth provider
const githubProvider = new GithubAuthProvider();
githubProvider.addScope('public_repo');
githubProvider.setCustomParameters({
    'allow_signup': 'false'
});


const firebaseSignInWithPopup = (dispatch) => {
    signInWithPopup(auth, githubProvider)
        .then((result) => {
            // This gives you a GitHub Access Token. You can use it to access the GitHub API.
            const credential = GithubAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            localStorage.clear()
            localStorage.setItem(TOKEN, token)

            // The signed-in user info.
            const user = result.user;
            dispatch(addUser({ token, user }))
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GithubAuthProvider.credentialFromError(error);
            console.log(errorCode, errorMessage, email, credential)
        });
}

const firebaseSignOut = (dispatch) => {
    signOut(auth).then(() => {
        // Sign-out successful.
        localStorage.removeItem(TOKEN);
        dispatch(deleteUser())
    }).catch((error) => {
        // An error happened.
        console.log(error)
    })
}


export { app, githubProvider, auth, firebaseSignInWithPopup, firebaseSignOut }

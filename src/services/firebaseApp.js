import { initializeApp } from 'firebase/app';
import { deleteUser, getAuth, GithubAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { addUser } from '../features/githubUser/githubUserSlice';
import { TOKEN } from '../App';

const firebaseConfig = {
    apiKey: "AIzaSyB2Bb7A0XludPb4wVKKgJKO7zW4KKa-s1A",
    authDomain: "github-topic-manager.firebaseapp.com",
    projectId: "github-topic-manager",
    storageBucket: "github-topic-manager.appspot.com",
    messagingSenderId: "287141083725",
    appId: "1:287141083725:web:1c7b8ccf16027de048ba04",
    measurementId: "G-7CXY30GLD9"
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

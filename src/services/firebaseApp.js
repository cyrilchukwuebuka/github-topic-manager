import { initializeApp } from 'firebase/app';
import { getAuth, GithubAuthProvider } from "firebase/auth";

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
githubProvider.addScope('repo');
githubProvider.setCustomParameters({
    'allow_signup': 'false'
});


export { app, githubProvider, auth }

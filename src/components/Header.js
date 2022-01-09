import React from 'react'
import styled from 'styled-components'
import { GithubAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth, githubProvider } from '../services/firebaseApp';
import { addUser, deleteUser } from '../features/githubUser/githubUserSlice';

const Header = () => {

    let dispatch, userData;

    const firebaseSignInWithPopup = () => {
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                // console.log(result)
                // This gives you a GitHub Access Token. You can use it to access the GitHub API.
                const credential = GithubAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;

                // The signed-in user info.
                const user = result.user;
                dispatch(addUser({ token, user }))
                // console.log('result', result)
                // console.log('token', token)
                console.log('user', userData)
            }).catch((error) => {
                console.log(error)
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

    const firebaseSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            dispatch(deleteUser())
            console.log('delete', userData)
        }).catch((error) => {
            // An error happened.
            console.log(error)
        })
    }

    return (
        <Nav>
            <div>
                <img src="/images/GitHub-Logo.svg" alt="" />
                <div>
                    <div>TOPIC</div>
                    <div>MANAGER</div>
                </div>
            </div>
            <div>How it works</div>
            <div>LOGO: for forking the repo</div>
            <div>AVATAR: user avatar</div>

        </Nav>
    )
}

export default Header

const Nav = styled.nav`
    height: 70px;
    background: #090b13;
`
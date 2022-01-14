import React from 'react'
import styled from 'styled-components'
import { GithubAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth, githubProvider } from '../services/firebaseApp';
import { addUser, deleteUser } from '../features/githubUser/githubUserSlice';
import { Box, Flex, HStack, Icon, Image, Text, VStack } from '@chakra-ui/react';
import { VscGithub } from 'react-icons/vsc';
import { BiGitBranch } from 'react-icons/bi';

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
        <Flex px='4%' py={6} h='60px' w='full' bg='gray.50' align="center" justify="space-between">
            <Box alignItems='flex-start'>
                <HStack>
                    {/* <Box w={50} h={50}>
                        <Image
                            borderRadius='full'
                            boxSize='100%'
                            objectFit='cover'
                            src="/images/GitHub-Logo.svg" alt="Logo" />
                    </Box> */}
                    <Icon as={VscGithub} w={45} h={45} />
                    <VStack>
                        <Text>TOPIC</Text>
                        <Text>MANAGER</Text>
                    </VStack>
                </HStack>
            </Box>
            <Flex h='full' w='30%' align="center" justify="space-between">
                <Flex w='70%' align="center" justify="space-between">
                    <Text
                        bgGradient="linear(to-l, #7928CA, #FF0080)"
                        fontWeight="extrabold"
                    >
                        How it works
                    </Text>
                    <Box>
                        <Text>Login</Text>
                    </Box>
                    <Icon as={BiGitBranch} w={25} h={25} />
                </Flex>
                <Box w={35} h={35}>
                    <Image 
                        borderRadius='full'
                        boxSize='100%'
                        objectFit='cover'
                        src="/images/User-Profile-PNG-Image.png" alt="Logo" />
                </Box>
            </Flex>
        </Flex>
    )
}

export default Header

const Nav = styled.nav`
    height: 70px;
    background: #090b13;
`
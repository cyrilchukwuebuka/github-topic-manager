import React, { useEffect, useState } from 'react'
import { GithubAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth, githubProvider } from '../services/firebaseApp';
import { addUser, deleteUser, getUserData } from '../features/githubUser/githubUserSlice';
import { Box, Flex, HStack, Icon, Image, Text, VStack } from '@chakra-ui/react';
import { VscGithub } from 'react-icons/vsc';
import { BiGitBranch } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { HamburgerIcon } from '@chakra-ui/icons';

const Header = () => {

    let dispatch = useDispatch();
    let userData = useSelector(getUserData);
    // let [avatar, setAvatar] = useState(userData.user?.photoURL)
    let avatar = userData.user?.photoURL;
    console.log(avatar)


    const firebaseSignInWithPopup = () => {
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                // This gives you a GitHub Access Token. You can use it to access the GitHub API.
                const credential = GithubAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;

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

    const firebaseSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            dispatch(deleteUser())
        }).catch((error) => {
            // An error happened.
            console.log(error)
        })
    }

    useEffect(() => {
        // const selector = async () => {
        //     userData = await useSelector(getUserData);
        // };
        return () => {
            
        }
    }, [])

    return (
        <Flex px={8} py={2} h='50px' w='full' bg='white' boxShadow='md' align="center" justify="space-between">
            <Box alignItems='flex-start'>
                <HStack>
                    <Icon as={VscGithub} w={35} h={35} color='#36328A' />
                    <VStack>
                        <Text fontWeight="bold" lineHeight='10px' color='#36328A'>TOPIC</Text>
                        <Text fontWeight="bold" lineHeight='10px' color='#36328A'>MANAGER</Text>
                    </VStack>
                </HStack>
            </Box>
            <Flex h='full' w='32%' align="center" justify="space-between">
                <Flex w='70%' align="center" justify="space-between">
                    <Text fontWeight='500'>How it works</Text>
                    <Text fontWeight='500' onClick={avatar ? firebaseSignOut : firebaseSignInWithPopup}>{avatar ? 'Log out' : 'Login'}</Text>
                    <Icon as={BiGitBranch} w={22} h={22} color='#6C63FF' />
                </Flex>
                <Box w={30} h={30} border='1px' borderRadius='full' borderColor='gray.300'>
                    <Image
                        borderRadius='full'
                        boxSize='100%'
                        objectFit='cover'
                        src={avatar ? `${avatar}` : "/images/avatar.png"} alt="Logo" 
                        />
                </Box>
                <HamburgerIcon />
            </Flex>
        </Flex>
    )
}

export default Header

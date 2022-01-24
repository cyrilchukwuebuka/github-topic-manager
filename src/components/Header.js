import React from 'react'
import { firebaseSignInWithPopup, firebaseSignOut } from '../services/firebaseApp';
import { getUserData } from '../features/githubUser/githubUserSlice';
import { Box, Flex, HStack, Icon, Image, Link, LinkBox, Text, VStack, LinkOverlay, useDisclosure, } from '@chakra-ui/react';
import { VscGithub } from 'react-icons/vsc';
import { BiGitBranch } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { HamburgerIcon } from '@chakra-ui/icons'
import { Link as ReactLink } from "react-router-dom";
import Tilt from 'react-parallax-tilt';
import DrawerCompenent from './Drawer';

const Header = () => {

    const dispatch = useDispatch();
    const { isOpen, onOpen, onClose } = useDisclosure();
    let userData = useSelector(getUserData).user;
    let avatar = userData?.photoURL;
    let accessToken = userData?.accessToken;

    return (
        <Flex px={8} py={2} h='50px' w='full' bg='white' boxShadow='md' align="center" justify="space-between">
            <Box alignItems='center'>
                <LinkBox>
                    <HStack _hover={{ cursor: "pointer" }}>
                        <LinkOverlay as={ReactLink} to='/'>
                            <Tilt tiltMaxAngleX={20} tiltMaxAngleY={20}><Icon as={VscGithub} w={35} h={35} color='#36328A' /></Tilt>
                        </LinkOverlay>
                        <VStack>
                            <Text fontWeight="bold" lineHeight='10px' color='brand.600'>TOPIC</Text>
                            <Text fontWeight="bold" lineHeight='10px' color='brand.600'>MANAGER</Text>
                        </VStack>
                    </HStack>
                </LinkBox>
            </Box>
            <Flex h='full' w='32%' align="center" justify="space-between">
                <Flex w='70%' align="center" justify="space-between">
                    <Link as={ReactLink} to='/' _focus={{ outline: 'none' }} _hover={{ textDecoration: 'none', transform: 'scale(1.05)' }} fontWeight='500'>How It Works</Link>
                    <Text _hover={{ transform: 'scale(1.05)', cursor: "pointer" }} fontWeight='500' onClick={accessToken ? () => firebaseSignOut(dispatch) : () => firebaseSignInWithPopup(dispatch)}>{accessToken ? 'Log out' : 'Login'}</Text>
                    <Link href='https://github.com/cyrilchukwuebuka/github-topic-manager' isExternal _focus={{ outline: 'none' }}><Icon as={BiGitBranch} w={22} h={22} color='brand.500' _hover={{ transform: 'scale(1.15)', cursor: "pointer" }} /></Link>
                </Flex>
                <Box w={30} h={30} border='1px' borderRadius='full' borderColor='gray.300'>
                    <>
                        {avatar ?
                            (<Image
                                borderRadius='full'
                                boxSize='100%'
                                objectFit='cover'
                                src={avatar} alt="Avatar"
                            />) :
                            (<Image
                                borderRadius='full'
                                boxSize='100%'
                                objectFit='cover'
                                src="/images/UserAvatar.png" alt="Avatar"
                            />)
                        }
                    </>
                </Box>
                <HamburgerIcon onClick={onOpen} _hover={{ transform: 'scale(1.15)', cursor: "pointer" }} />
                <DrawerCompenent isOpen={isOpen} onClose={onClose} accessToken={accessToken} />
            </Flex>
        </Flex >
    )
}

export default Header

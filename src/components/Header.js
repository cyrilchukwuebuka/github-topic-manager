import React, { useState } from 'react'
import { firebaseSignInWithPopup, firebaseSignOut } from '../services/firebaseApp';
import { getUserData } from '../features/githubUser/githubUserSlice';
import { Box, Flex, HStack, Icon, Image, Link, LinkBox, Text, VStack, LinkOverlay, useDisclosure, } from '@chakra-ui/react';
import { VscGithub } from 'react-icons/vsc';
import { BiGitBranch, BiMoon } from 'react-icons/bi';
import { ImSun } from 'react-icons/im';
import { useDispatch, useSelector } from 'react-redux';
import { HamburgerIcon } from '@chakra-ui/icons'
import { useColorMode, useColorModeValue } from '@chakra-ui/react';
import { Link as ReactLink } from "react-router-dom";
import Tilt from 'react-parallax-tilt';
import DrawerCompenent from './Drawer';

const Header = () => {
    const { toggleColorMode } = useColorMode()
    const bgColor = useColorModeValue('themeLight.bg', 'themeDark.bgBody')
    const iconColor = useColorModeValue('themeLight.icon', 'themeDark.icon')
    const logoColor = useColorModeValue('themeLight.logo', 'themeDark.logo')
    const icon = useColorModeValue(BiMoon, ImSun)
    const dispatch = useDispatch();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const userData = useSelector(getUserData).user;
    const avatar = userData?.photoURL;
    const accessToken = userData?.accessToken;

    return (
        <Flex px={8} py={2} h='50px' w='full' bg={bgColor} boxShadow='md' align="center" justify="space-between">
            <Box alignItems='center'>
                <LinkBox>
                    <HStack _hover={{ cursor: "pointer" }}>
                        <LinkOverlay as={ReactLink} to='/'>
                            <Tilt tiltMaxAngleX={20} tiltMaxAngleY={20}><Icon as={VscGithub} w={35} h={35} color={logoColor}/></Tilt>
                        </LinkOverlay>
                        <VStack>
                            <Text fontWeight="bold" lineHeight='10px' color={logoColor}>TOPIC</Text>
                            <Text fontWeight="bold" lineHeight='10px' color={logoColor}>MANAGER</Text>
                        </VStack>
                    </HStack>
                </LinkBox>
            </Box>
            <Flex h='full' w='33%' align="center" justify="space-between">
                <Flex w='90%' align="center" justify="space-between">
                    <Link as={ReactLink} to='/' _focus={{ outline: 'none' }} _hover={{ textDecoration: 'none', transform: 'scale(1.05)' }} fontWeight='500'>How It Works</Link>
                    <Text _hover={{ transform: 'scale(1.05)', cursor: "pointer" }} fontWeight='500' onClick={accessToken ? () => firebaseSignOut(dispatch) : () => firebaseSignInWithPopup(dispatch)}>{accessToken ? 'Log out' : 'Login'}</Text>
                    <Link href='https://github.com/cyrilchukwuebuka/github-topic-manager' isExternal _focus={{ outline: 'none' }}><Icon as={BiGitBranch} w={22} h={22} color={iconColor} _hover={{ transform: 'scale(1.15)', cursor: "pointer" }} /></Link>
                    <Icon as={icon} onClick={toggleColorMode} mx={1} w={22} h={22} color={iconColor} _hover={{ transform: 'scale(1.15)', cursor: "pointer" }} />
                    <Box w={30} h={30} border='1px' borderRadius='full' borderColor='gray.300'>
                        <Image
                            borderRadius='full'
                            boxSize='100%'
                            objectFit='cover'
                            src={avatar ? `${avatar}` : "/images/UserAvatar.png"} alt="Avatar"
                        />
                    </Box>
                </Flex>
                <HamburgerIcon onClick={onOpen} _hover={{ transform: 'scale(1.15)', cursor: "pointer" }} />
                <DrawerCompenent isOpen={isOpen} onClose={onClose} accessToken={accessToken} />
            </Flex>
        </Flex >
    )
}

export default Header

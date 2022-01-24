import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    Link,
    Text,
    Box,
    LinkBox,
    HStack,
    LinkOverlay,
    VStack,
    Icon,
    Button,
    Flex,
    Image,
} from '@chakra-ui/react'
import { Link as ReactLink } from "react-router-dom"
import { useDispatch } from 'react-redux';
import { firebaseSignInWithPopup, firebaseSignOut } from '../services/firebaseApp';
import Tilt from 'react-parallax-tilt';
import { VscGithub } from 'react-icons/vsc';
import { FaInstagram } from 'react-icons/fa';
import { BsLinkedin, BsTwitter } from 'react-icons/bs';
import Fade from 'react-reveal/Fade'

const DrawerCompenent = ({ isOpen, onClose, accessToken }) => {
    const dispatch = useDispatch();


    return (
        <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerHeader>
                    <Flex w='100%' align='center' justify='space-between'>
                        <Box alignItems='center'>
                            <LinkBox>
                                <HStack _hover={{ cursor: "pointer" }}>
                                    <LinkOverlay as={ReactLink} to='/' _focus={{ outline: 'none' }}>
                                        <Tilt tiltMaxAngleX={20} tiltMaxAngleY={20}><Icon as={VscGithub} w={35} h={35} color='#36328A' /></Tilt>
                                    </LinkOverlay>
                                    <VStack>
                                        <Text fontWeight="bold" lineHeight='10px' color='brand.600'>TOPIC</Text>
                                        <Text fontWeight="bold" lineHeight='10px' color='brand.600'>MANAGER</Text>
                                    </VStack>
                                </HStack>
                            </LinkBox>
                        </Box>
                        <Button h={10} w={10} variant='outline' m={3} onClick={onClose}>
                            x
                        </Button>
                    </Flex>
                </DrawerHeader>

                <DrawerBody>
                    <Fade top>
                        <Box mb='10px' _hover={{ transform: 'scale(1.02)', cursor: "pointer" }}>
                            <Link as={ReactLink} to='/' _focus={{ outline: 'none' }} _hover={{ textDecoration: 'none' }} fontWeight='500'>How It Works</Link>
                        </Box>
                    </Fade>
                    <Fade right>
                        <Text mb='10px' _hover={{ transform: 'scale(1.02)', cursor: "pointer" }} fontWeight='500' onClick={accessToken ? () => firebaseSignOut(dispatch) : () => firebaseSignInWithPopup(dispatch)}>{accessToken ? 'Log out' : 'Login'}</Text>
                    </Fade>
                    <Fade bottom>
                        <Box mb='10px' _hover={{ transform: 'scale(1.02)', cursor: "pointer" }}>
                            <Link href='https://github.com/cyrilchukwuebuka/github-topic-manager' _hover={{ cursor: "pointer" }} fontWeight='500' >Fork Repo</Link>
                        </Box>
                    </Fade>
                </DrawerBody>

                <DrawerFooter>
                    <Flex direction='column' px='4px' py='6px' h='100%' w='100%' bg='white' borderTop='1px' borderColor='gray.200' align="center" justify="space-between" >
                        <Flex paddingLeft='10px' align="center" justify="center">
                            <Text paddingRight='10px'>© 2022</Text>
                            <Box w='15px' h='15px' marginRight='10px'>
                                <Image w='100%' h='100%' src='/images/flag.png' />
                            </Box>
                        </Flex>
                        <Text >Chukwuebuka Cyril Muofunanya</Text>
                        <Flex align="center" justify="center" paddingRight='10px'>
                            <Box paddingRight='10px' _hover={{ transform: 'scale(1.05)', cursor: "pointer" }}>
                                <Link href='https://github.com/cyrilchukwuebuka' isExternal _focus={{ outline: 'none' }}><Icon as={VscGithub} color='black' /></Link>
                            </Box>
                            <Box paddingRight='10px' _hover={{ transform: 'scale(1.05)', cursor: "pointer" }}>
                                <Link href='https://www.instagram.com/chuk_cy/?hl=en' isExternal _focus={{ outline: 'none' }}><Icon as={FaInstagram} color='red' /></Link>
                            </Box>
                            <Box paddingRight='10px' _hover={{ transform: 'scale(1.05)', cursor: "pointer" }}>
                                <Link href='https://twitter.com/hooolycode' isExternal _focus={{ outline: 'none' }}><Icon as={BsTwitter} color='#1DA1F2' /></Link>
                            </Box>
                            <Box paddingRight='10px' _hover={{ transform: 'scale(1.05)', cursor: "pointer" }}>
                                <Link href='www.linkedin.com/in/chukwuebuka-cyril-muofunanya' isExternal _focus={{ outline: 'none' }}><Icon as={BsLinkedin} color='#0077b5' /></Link>
                            </Box>
                        </Flex>
                    </Flex>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

export default DrawerCompenent

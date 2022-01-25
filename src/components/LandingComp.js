import { Box, Button, Container, Flex, Image, Link, Text, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link as ReactLink } from "react-router-dom"
import { firebaseSignInWithPopup } from '../services/firebaseApp'
import Tilt from 'react-parallax-tilt'
import Bounce from 'react-reveal/Bounce'

const LandingComp = () => {
    const [isLargerThan1085] = useMediaQuery('(min-width: 1085px)')
    const dispatch = useDispatch()

    return (
        <Container maxW='container.xl' w='100%' h={isLargerThan1085 ? 'calc(100vh - 80px)' : '100%'} padding='10px'>
            <Flex wrap='wrap' py='8%' my='2%' align='center' justify='center' borderRight='1px' borderTop='1px' borderColor='gray.200' boxShadow='base' overflowY='scroll' sx={{
                '&::-webkit-scrollbar': {
                    width: '1px',
                    borderRadius: '8px',
                    backgroundColor: `rgba(0, 0, 0, 0.05)`,
                },
                '&::-webkit-scrollbar-thumb': {
                    borderRadius: '8px',
                    backgroundColor: `rgba(0, 0, 0, 0.05)`,
                },
            }}>
                <Bounce left>
                    <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
                        <Box p={8} marginRight={5} h={{ base: '150px', md: '250px', lg: '350px' }} w={{ base: '150px', md: '250px', lg: '350px' }} borderLeft='1px' borderBottom='1px' borderColor='gray.200' boxShadow='base'>
                            <Image src='/images/topic.svg' alt='Topic' />
                        </Box >
                    </Tilt>
                </Bounce>
                <Flex align='center' justify='center' direction='column' p={4}>
                    <Flex p={10} wrap='wrap' align='center' justify='center'>
                        <Text textAlign='center' fontStyle='italic' fontSize={{ base: '14px', md: '16px', lg: '18px' }}>Another Great Day To Create Splendid Topics...</Text>
                        <Text textAlign='center' fontSize={{ base: '14px', md: '16px', lg: '18px' }}>Why not hop in let's get it started...😊</Text>
                    </Flex>
                    <Text fontSize={{ base: '14px', md: '16px', lg: '18px' }} textAlign='center'>Click on <Link as={ReactLink} to='/sejd' _hover={{ color: 'brand.300', textDecoration: 'none' }} _focus={{ outline: 'none' }} fontStyle='italic' fontSize={{ base: '16px', md: '18px', lg: '20px' }} fontWeight='500'>How It Works</Link> for additional information</Text>
                    <Button h={{ base: '36px', md: '40px', lg: '40px' }} w={{ base: '76px', md: '80px', lg: '80px' }} _hover={{ bg: 'brand.300' }} _active={{ transform: 'scale(1.05)' }} _focus={{ outline: 'none' }} m={5} textTransform='uppercase' bgColor='brand.500' color='white' onClick={() => firebaseSignInWithPopup(dispatch)}>
                        <Text fontSize='14px'>Login</Text>
                    </Button>
                </Flex>
            </Flex >
        </Container >
    )
}

export default LandingComp

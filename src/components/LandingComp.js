import { Box, Button, Container, Flex, Image, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link as ReactLink } from "react-router-dom"
import { firebaseSignInWithPopup } from '../services/firebaseApp'

const LandingComp = () => {
    const dispatch = useDispatch()

    return (
        <Container maxW='container.xl' w='100%' h='calc(100vh - 80px)' padding={5} m='auto'>
            <Flex wrap='wrap' py='8%' my='2%' align='center' justify='center' borderRight='1px' borderTop='1px' borderColor='gray.200' boxShadow='base'>
                <Box p={8} marginRight={5} h='350px' w='350px' borderLeft='1px' borderBottom='1px' borderColor='gray.200' boxShadow='base'>
                    <Image src='/images/topic.svg' alt='Topic' />
                </Box >
                <Flex align='center' justify='center' direction='column'>
                    <Flex p={10} wrap='wrap' align='center' justify='center'>
                        <Text fontStyle='italic'>Another Great Day To Create Splendid Topics...</Text>
                        <Text>Why not hop in let's get it started...😊</Text>
                    </Flex>
                    <Text>Click on <Link as={ReactLink} to='/sejd' _hover={{ color: 'brand.300', textDecoration: 'none' }} _focus={{ outline: 'none' }} fontStyle='italic' fontSize='18px' fontWeight='500'>How It Works</Link> for additional information</Text>
                    <Button variant='with-shadow' _hover={{ bg: 'brand.300' }} _active={{ transform: 'scale(1.05)' }} _focus={{ outline: 'none' }} m={5} textTransform='uppercase' bgColor='brand.500' color='white' onClick={() => firebaseSignInWithPopup(dispatch)}>Login</Button>
                </Flex>
            </Flex >
        </Container >
    )
}

export default LandingComp

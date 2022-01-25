import { Box, Button, Flex, Image, Link, Text, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import { Link as ReactLink } from 'react-router-dom'
import Bounce from 'react-reveal/Bounce'

const PageNotFound = () => {
    const [isLargerThan600] = useMediaQuery('(min-width: 600px)')

    return (
        <Flex wrap={isLargerThan600 ? 'nowrap' : 'wrap'} justify='center' align='center' h='calc(100vh - 80px)' w='100%' p={8}>
            <Bounce bottom>
                <Box w='fit-content' h='fit-content' mr={isLargerThan600 ? '40px' : ''}>
                    <Image w={{ base: '100px', md: '200px', lg: '300px' }} h={{ base: '100px', md: '200px', lg: '300px' }} borderRadius='md' src='/images/voodooMaster.jpg' />
                    <Text textAlign='center' my={4} fontStyle='italic' fontSize={{ base: '20px', md: '26px', lg: '30px' }} fontWeight='600'>Voodoo Lord</Text>
                </Box>
            </Bounce>
            <Flex direction='column' justify='center' align='center'>
                <Box marginBottom={isLargerThan600 ? '80px' : '10px'}>
                    <Text fontStyle='italic' fontSize={{ base: '24px', md: '36px', lg: '58px' }} textAlign='center' fontWeight='600'>Oooops!!!...</Text>
                </Box>
                <Box>
                    <Text fontSize={{ base: '14px', md: '16px', lg: '18px' }} textAlign='center'>Welcome to the lost Multi-Verse</Text>
                </Box>
                <Box>
                    <Text fontSize={{ base: '14px', md: '16px', lg: '18px' }} textAlign='center'>I noticed you've lost track of path. If you still wish to find your path, </Text>
                </Box>
                <Box>
                    <Text fontSize={{ base: '14px', md: '16px', lg: '18px' }} textAlign='center'>Click the below button</Text>
                </Box>
                <Button marginTop={10} bgColor='#6C63FF' color='white' _focus={{ outline: 'none' }} _hover={{ bg: 'brand.300', outline: 'none' }} _active={{ transform: 'scale(1.05)' }}>
                    <Link as={ReactLink} to='/' _hover={{ outline: 'none' }}>
                        <Text fontSize={{ base: '14px', md: '16px', lg: '18px' }} textAlign='center'>Conjure Path</Text>
                    </Link>
                </Button>
            </Flex>
        </Flex>
    )
}

export default PageNotFound


// <Flex Container>
// Voodooo Lord <To be written beneath the vodoMaster Image>

// Oops!!!...
// Welcome to the lost Multi-Verse
// I noticed you've lost track of path
// If you still wish to find your path,
// Click the below button

// Conjure Path <Button Component>
// <Flex Container>
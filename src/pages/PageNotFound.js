import { Box, Button, Flex, Image, Link, Text } from '@chakra-ui/react'
import React from 'react'
import {Link as ReactLink} from 'react-router-dom'

const PageNotFound = () => {
    return (
        <Flex justify='center' align='center' h='calc(100vh - 80px)' w='100%'>
            <Box w='fit-content' h='fit-content'>
                <Image w='350px' h='350px' src='/images/voodooMaster.jpg' />
                <Text textAlign='center' my={4} fontStyle='italic' fontSize='2xl' fontWeight='600'>Voodoo Lord</Text>
            </Box>
            <Flex direction='column' justify='center' align='center'>
                <Box marginBottom={20}>
                    <Text fontStyle='italic' fontSize='4xl' fontWeight='600'>Oooops!!!...</Text>
                </Box>
                <Box>
                    <Text>Welcome to the lost Multi-Verse</Text>
                </Box>
                <Box>
                    <Text>I noticed you've lost track of path. If you still wish to find your path, </Text>
                </Box>
                <Box>
                    <Text>Click the below button</Text>
                </Box>
                <Button marginTop={10} bgColor='#6C63FF' color='white' _focus={{ outline: 'none' }} _hover={{ bg: 'brand.300' }} _active={{ transform: 'scale(1.05)' }}>
                    <Link as={ReactLink} to='/'>Conjure Path</Link>
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
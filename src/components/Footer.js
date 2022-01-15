import { Box, Flex, Icon, Image, Text } from '@chakra-ui/react'
import { FaInstagram } from 'react-icons/fa'
import { BsTwitter, BsLinkedin } from 'react-icons/bs'
import React from 'react'

const Footer = () => {
    return (
        <Flex px='4px' py='6px' h='30px' w='full' bg='white' borderTop='1px' borderColor='gray.200' boxShadow='sm' align="center" justify="space-between" >
            <Flex paddingLeft='10px' align="center" justify="center">
                <Text paddingRight='10px'>© 2022</Text>
                <Box w='15px' h='15px' marginRight='10px'>
                    <Image w='100%' h='100%' src='/images/flag.png' />
                </Box>
                <Text>Chukwuebuka Cyril Muofunanya</Text>
            </Flex>
            <Flex align="center" justify="center" paddingRight='10px'>
                <Text paddingRight='10px'>Social Media:</Text>
                <Flex>
                    <Box paddingRight='10px'><Icon as={FaInstagram} color='red' /></Box>
                    <Box paddingRight='10px'><Icon as={BsTwitter} color='#1DA1F2' /></Box>
                    <Box paddingRight='10px'><Icon as={BsLinkedin} color='#0077b5' /></Box>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Footer

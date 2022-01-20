import { Box, Flex, Icon, Image, Text } from '@chakra-ui/react'
import { FaInstagram } from 'react-icons/fa'
import { BsTwitter, BsLinkedin } from 'react-icons/bs'
import React from 'react'
import { Link } from '@chakra-ui/react'
import { VscGithub } from 'react-icons/vsc'

const Footer = () => {
    return (
        <Flex px='4px' py='6px' h='30px' w='full' bg='white' borderTop='1px' borderColor='gray.200' boxShadow='sm' align="center" justify="space-between" >
            <Flex paddingLeft='10px' align="center" justify="center">
                <Text paddingRight='10px'>© 2022</Text>
                <Box w='15px' h='15px' marginRight='10px'>
                    <Image w='100%' h='100%' src='/images/flag.png' />
                </Box>
                <Text >Chukwuebuka Cyril Muofunanya</Text>
            </Flex>
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
    )
}

export default Footer

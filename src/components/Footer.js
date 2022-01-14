import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
    return (
        <Flex px='4%' py={6} h='40px' w='full' bg='gray.500' align="center" justify="space-between" >
            <Flex direction='column' align="center" justify="center">
                <Text>/Created/</Text>
                <Text> 2022</Text>
            </Flex>
            <Flex direction='column' align="center" justify="center">
                <Text>/By/</Text>
                <Text>Chukwuebuka Cyril Muofunanya</Text>
            </Flex>
            <Flex direction='column' align="center" justify="center">
                <Text>Social Media</Text>
                <Flex align="center" justify="center">
                    <Text>Icons</Text>
                    <Text>Icons</Text>
                    <Text>Icons</Text>
                    <Text>Icons</Text>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Footer

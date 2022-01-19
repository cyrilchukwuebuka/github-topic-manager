import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

const RepoDetail = () => {
    // dummy count
    // let topicCount = 0

    return (
        <Flex w='100%' h='calc(100vh - 80px)' p={10}>
            <Flex direction='column' justify='space-between' align='center' h='100%' w='50%' paddingLeft={10}>
                <Flex direction='column' justify='center' align='center' h='90%' w='100%'>
                    <Box marginBottom='20px'>
                        <Text h='10%' textTransform='uppercase' fontSize='4xl'>Amazon Clone</Text>
                    </Box>
                    <Box>
                        <Text h='20%' textAlign='center' fontSize='18px'>A Project built with the intention to strengthen my knowledge of React and complex web technologies</Text>
                    </Box>
                    <Box h='60%'>
                        <Text h='10%' textAlign='center' my='20px' fontSize='2xl'>Topics</Text>
                        <Flex h='70%' wrap='wrap' my='10px' justify='center' overflowY='scroll' sx={{
                            '&::-webkit-scrollbar': {
                                width: '10px',
                                borderRadius: '8px',
                                backgroundColor: `rgba(0, 0, 0, 0.05)`,
                            },
                            '&::-webkit-scrollbar-thumb': {
                                borderRadius: '8px',
                                backgroundColor: `rgba(0, 0, 0, 0.05)`,
                            },
                        }}>
                            <Button marginEnd='10px' marginBottom='10px'>React -</Button>
                            <Button marginEnd='10px' marginBottom='10px'>React -</Button>
                            <Button marginEnd='10px' marginBottom='10px'>React -</Button>
                            <Button marginEnd='10px' marginBottom='10px'>React -</Button>
                            <Button marginEnd='10px' marginBottom='10px'>React -</Button>
                            <Button marginEnd='10px' marginBottom='10px'>React -</Button>
                            <Button marginEnd='10px' marginBottom='10px'>React -</Button>
                            <Button marginEnd='10px' marginBottom='10px'>React -</Button>
                            <Button marginEnd='10px' marginBottom='10px'>React -</Button>
                            <Button marginEnd='10px' marginBottom='10px'>React -</Button>
                            <Button marginEnd='10px' marginBottom='10px'>React -</Button>
                            <Button marginEnd='10px' marginBottom='10px'>React -</Button>
                            <Button marginEnd='10px' marginBottom='10px'>React -</Button>
                            <Button marginEnd='10px' marginBottom='10px'>React -</Button>
                            <Button marginEnd='10px' marginBottom='10px'>React -</Button>
                            <Button marginEnd='10px' marginBottom='10px'>React -</Button>
                            <Button marginEnd='10px' marginBottom='10px'>React -</Button>
                            <Button marginEnd='10px' marginBottom='10px'>React -</Button>
                            <Button marginEnd='10px' marginBottom='10px'>React -</Button>
                            <Button marginEnd='10px' marginBottom='10px'>React -</Button>
                            <Button marginEnd='10px' marginBottom='10px'>React -</Button>
                            <Button marginEnd='10px' marginBottom='10px'>React -</Button>
                            <Button marginEnd='10px' marginBottom='10px'>React -</Button>
                            <Button marginEnd='10px' marginBottom='10px'>React -</Button>
                            <Button marginEnd='10px' marginBottom='10px'>React -</Button>
                            <Button marginEnd='10px' marginBottom='10px'>React -</Button>
                            <Button marginEnd='10px' marginBottom='10px'>React -</Button>
                            <Button marginEnd='10px' marginBottom='10px'>React -</Button>
                            <Button marginEnd='10px' marginBottom='10px'>React -</Button>
                            <Button marginEnd='10px' marginBottom='10px'>React -</Button>
                            <Button marginEnd='10px' marginBottom='10px'>React -</Button>
                            <Button marginEnd='10px' marginBottom='10px'>React -</Button>
                            <Button marginEnd='10px' marginBottom='10px'>React -</Button>
                            <Button marginEnd='10px' marginBottom='10px'>React -</Button>
                            <Button marginEnd='10px' marginBottom='10px'>React -</Button>
                            <Button marginEnd='10px' marginBottom='10px'>React -</Button>
                            <Button marginEnd='10px' marginBottom='10px'>React -</Button>
                            <Button marginEnd='10px' marginBottom='10px'>React -</Button>
                            <Button marginEnd='10px' marginBottom='10px'>React -</Button>
                            <Button marginEnd='10px' marginBottom='10px'>React -</Button>
                            <Button marginEnd='10px' marginBottom='10px'>React -</Button>
                            <Button marginEnd='10px' marginBottom='10px'>React -</Button>
                            <Button marginEnd='10px' marginBottom='10px'>React -</Button>
                            <Button marginEnd='10px' marginBottom='10px'>React -</Button>
                        </Flex>
                    </Box>
                </Flex>
                <Flex w='100%' h='10%' align='center' justify='center'>
                    <Button marginEnd='10px' _hover={{ transform: 'scale(1.05)', color: 'brand.300', textDecoration: 'none' }} _focus={{ outline: 'none' }}>Add Topic</Button>
                    <Button bgColor='#6C63FF' color='white' _hover={{ transform: 'scale(1.05)', bg: 'brand.300', textDecoration: 'none' }} _focus={{ outline: 'none' }}>Repo GitHub Page</Button>
                </Flex>
            </Flex>
            <Box alignItems='center' padding='50px' w='50%' h='100%'>
                <Image w='100%' h='100%' src='/images/repoDetail.svg' />
            </Box>
        </Flex>
    )
}

export default RepoDetail

import { Box, Button, Flex, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const RepoDetail = () => {
    // dummy count
    let topicCount = 0

    return (
        <Flex w='100%' h={!topicCount ? '100%' : `calc(100vh - 80px)`} p={10}>
            <Flex direction='column' justify='space-between' align='center' h='100%' w='50%' paddingLeft={10}>
                <Flex direction='column' justify='center' align='center' h='100%' w='100%'>
                    <Box marginBottom='20px'>
                        <Text textTransform='uppercase' fontSize='4xl'>Amazon Clone</Text>
                    </Box>
                    <Box>
                        <Text textAlign='center' fontSize='18px'>A Project built with the intention to strengthen my knowledge of React and complex web technologies</Text>
                    </Box>
                    <Box>
                        <Text textAlign='center' my='20px' fontSize='2xl'>Topics</Text>
                        <Flex wrap='wrap' my='10px' justify='center'>
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
                <Flex w='100%' align='center' justify='center'>
                    <Button marginEnd='10px'>Add Topic</Button>
                    <Button bgColor='#6C63FF' color='white'>Repo GitHub Page</Button>
                </Flex>
            </Flex>
            <Box alignItems='center' padding='50px' w='50%' h='100%'>
                <Image w='100%' h='100%' src='/images/repoDetail.svg' />
            </Box>
        </Flex>
    )
}

export default RepoDetail

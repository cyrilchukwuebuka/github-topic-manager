import { Box, Button, Flex, Image, Link, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ModalComponent from '../components/Modal';
import { getRepos } from '../features/githubUser/githubUserSlice';

const RepoDetail = () => {
    let { repoID } = useParams();
    const repo = Object.values(useSelector(getRepos))
        .filter(repo => repo.id === Number(repoID))
    console.log(repo[0])
    const { name, description, id, topics, html_url } = repo[0]
    // console.log(name, typeof description, id, topics, html_url)
    const { isOpen, onOpen, onClose } = useDisclosure()

    const onRemove = (topics) => {
        onClose()
        console.log(topics, id)
    }

    const onAdd = (topics) => {
        onClose();
        console.log(topics, id)
    }

    return (
        <Flex w='100%' h='calc(100vh - 80px)' p={10}>
            <Flex direction='column' justify='space-between' align='center' h='100%' w='50%' paddingLeft={10}>
                <Flex direction='column' justify='center' align='center' h='90%' w='100%'>
                    <Box marginBottom='20px'>
                        <Text h='10%' textTransform='uppercase' fontSize='3xl' textAlign='center'>{name}</Text>
                    </Box>
                    {description !== null ? (<Box>
                        <Text h='20%' textAlign='center' fontSize='18px'>{description}</Text>
                    </Box>) : (
                        <Text textAlign='center'>This repository has no description</Text>
                    )}
                    <Box h='60%'>
                        <Text h='10%' textAlign='center' my='20px' fontSize='2xl'>Topics</Text>
                        {topics.length !== 0 ? (<Flex h='70%' p={5} marginBottom={3} wrap='wrap' my='10px' justify='center' overflowY='scroll' sx={{
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
                            {
                                (topics.map((topic, index) => (
                                    <Button key={index} marginEnd='10px' marginBottom='10px'>{topic}</Button>
                                )))
                            }
                        </Flex>) : (
                            <Text textAlign='center'>No topic found</Text>
                        )}
                    </Box>
                </Flex>
                <Flex w='100%' h='10%' align='center' justify='center'>
                    <Button marginEnd='10px' onClick={onOpen} _hover={{ transform: 'scale(1.05)', color: 'brand.300', textDecoration: 'none' }} _focus={{ outline: 'none' }}>
                        Add Topic
                    </Button>
                    <Button bgColor='#6C63FF' color='white' _hover={{ transform: 'scale(1.05)', bg: 'brand.300', textDecoration: 'none' }} _focus={{ outline: 'none' }}>
                        <Link isExternal href={html_url} _focus={{ outline: 'none' }} _hover={{ textDecoration: 'none' }}>Repo GitHub Page</Link>
                    </Button>
                </Flex>
                <ModalComponent isOpen={isOpen} onClose={onClose} onRemove={onRemove} onAdd={onAdd}/>
            </Flex>
            <Box alignItems='center' padding='50px' w='50%' h='100%'>
                <Image w='100%' h='100%' src='/images/repoDetail.svg' />
            </Box>
        </Flex>
    )
}

export default RepoDetail

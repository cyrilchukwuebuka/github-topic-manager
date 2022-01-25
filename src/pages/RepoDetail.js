import { Box, Button, Container, Flex, Image, Link, Spinner, Text, useColorModeValue, useDisclosure, useMediaQuery } from '@chakra-ui/react'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ModalComponent from '../components/Modal';
import { fetchAsyncRepo, getLoader, getRepo, removeFetchedRepo } from '../features/githubUser/githubUserSlice';
import Fade from 'react-reveal/Fade'
import Bounce from 'react-reveal/Bounce'
import { updateRepoTopic } from '../services/utility';
import { TOKEN } from '../App';

const RepoDetail = () => {
    const [isLargerThan653] = useMediaQuery('(min-width: 653px)')
    const bgColor = useColorModeValue('themeLight.bg', 'themeDark.bgBody')
    const dispatch = useDispatch()
    const { repoID } = useParams();
    const [owner, id, repoName] = repoID.match(/[a-z-_]+|[0-9]+/ig)
    const accessToken = localStorage.getItem(TOKEN)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const isLoaded = useSelector(getLoader);
    const repo = useSelector(getRepo)
    console.log(repo)
    const { name, description, topics, html_url } = repo

    const onRemove = (topics) => {
        onClose()
        updateRepoTopic(topics, 'remove', accessToken, [repo])
    }

    const onAdd = (topics) => {
        onClose();
        updateRepoTopic(topics, 'add', accessToken, [repo])
    }

    useEffect(() => {
        dispatch(fetchAsyncRepo({ accessToken, owner, repoName }));
        return () => {
            dispatch(removeFetchedRepo())
        }
    }, [dispatch, accessToken, owner, repoName])

    return (
        <>
            {
                isLoaded ? (
                    <Flex wrap='wrap-reverse' w='100%' h='calc(100vh - 80px)' p={10} bg={bgColor}>
                        <Flex direction='column' justify='space-between' align='center' h='100%' w={isLargerThan653 ? '50%' : '100%'} paddingLeft={isLargerThan653 ? '40px' : '0px'}>
                            <Flex direction='column' justify='center' align='center' h='90%' w='100%'>
                                <Box marginBottom='20px'>
                                    <Text h='10%' textTransform='uppercase' fontSize={{ base: '21px', md: '26px', lg: '30px' }} textAlign='center'>{name}</Text>
                                </Box>
                                {description !== null ? (<Box>
                                    <Text h='20%' textAlign='center' fontSize={{ base: '11px', md: '13px', lg: '16px' }}>{description}</Text>
                                </Box>) : (
                                    <Text textAlign='center' fontSize={{ base: '11px', md: '13px', lg: '16px' }}>This repository has no description</Text>
                                )}
                                <Box h='60%'>
                                    <Text h='10%' textAlign='center' my='20px' fontSize={{ base: '18px', md: '23px', lg: '26px' }}>Topics</Text>
                                    {topics?.length !== 0 ? (<Flex h='70%' p={5} marginBottom={3} wrap='wrap' my='10px' justify='center' overflowY='scroll' sx={{
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
                                            (topics?.map((topic, index) => (
                                                <Fade bottom>
                                                    <Button key={index} marginEnd='10px' marginBottom='10px'>
                                                        <Text fontSize={{ base: '11px', md: '13px', lg: '16px' }}>{topic}</Text>
                                                    </Button>
                                                </Fade>
                                            )))
                                        }
                                    </Flex>) : (
                                        <Text textAlign='center' fontSize={{ base: '11px', md: '13px', lg: '16px' }}>No topic found</Text>
                                    )}
                                </Box>
                            </Flex>
                            <Flex w='100%' h='10%' align='center' justify='center'>
                                <Button marginEnd='10px' onClick={onOpen} _hover={{ transform: 'scale(1.05)', color: 'brand.300', textDecoration: 'none' }} _focus={{ outline: 'none' }}>
                                    <Text fontSize='14px'>Add Topic</Text>
                                </Button>
                                <Button bgColor='#6C63FF' color='white' _hover={{ transform: 'scale(1.05)', bg: 'brand.300', textDecoration: 'none' }} _focus={{ outline: 'none' }}>
                                    <Link isExternal href={html_url} _focus={{ outline: 'none' }} _hover={{ textDecoration: 'none' }}>
                                        <Text fontSize='14px'>Repo GitHub Page</Text>
                                    </Link>
                                </Button>
                            </Flex>
                            <ModalComponent isOpen={isOpen} onClose={onClose} onRemove={onRemove} onAdd={onAdd} />
                        </Flex>
                        <>
                            {isLargerThan653 && <Box alignItems='center' padding='50px' w='50%' h='100%'>
                                <Bounce right>
                                    <Image w='100%' h='100%' src='/images/repoDetail.svg' />
                                </Bounce>
                            </Box>}
                        </>
                    </Flex>
                ) : (
                    <Container maxW='container.xl' w='100%' h='calc(100vh - 80px)' padding={5}>
                        <Flex align='center' justify='center' py='calc((100vh - 80px)/4)' h='100%' w='100%'>
                            <Spinner color='brand.500'
                                size='xl'
                                thickness='4px'
                                speed='0.65s'
                                emptyColor='gray.200'
                            />
                        </Flex>
                    </Container>
                )
            }
        </>
    )
}

export default RepoDetail

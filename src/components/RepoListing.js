import { Button, Container, Flex, Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverTrigger, Spinner, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncRepos, getLoader, getRepos, getUserData } from '../features/githubUser/githubUserSlice';
import ModalComponent from './Modal';
import RepoCard from './RepoCard';
import Fade from 'react-reveal/Fade'
import { updateRepoTopic } from '../services/utility';

const RepoListing = () => {
    const accessToken = useSelector(getUserData)?.token;
    const dispatch = useDispatch();
    const isLoaded = useSelector(getLoader);
    const repos = Object.values(useSelector(getRepos));
    const { isOpen, onOpen, onClose } = useDisclosure();
    let [count, setCount] = useState(0);
    let [selectedRepo, setSelectedRepo] = useState([]);

    const checkedRepoValue = (repo) => {
        const foundIndex = selectedRepo.findIndex(checkRepo => checkRepo.id.toString() === repo.id.toString())
        console.log(foundIndex)
        if (foundIndex === -1) {
            setSelectedRepo([...selectedRepo, repo])
            setCount(++count)
        } else {
            let tempRepo = [...selectedRepo]
            tempRepo.splice(foundIndex, 1)
            setSelectedRepo([...tempRepo])
            setCount(--count)
        }
        console.log(selectedRepo[0])
    }

    const repoRender = repos.map((repo) => (
        <RepoCard key={repo.id} id={repo.id} name={repo.name} repo={repo} callback={checkedRepoValue} />
    ))

    const onAdd = (topics) => {
        onClose()
        updateRepoTopic(topics, 'add', accessToken, selectedRepo)
        // setTimeout(() => {
        //     window.location.reload()
        // }, 1000);
    }

    const onRemove = (topics) => {
        onClose()
        updateRepoTopic(topics, 'remove', accessToken, selectedRepo)
        // setTimeout(() => {
        //     window.location.reload()
        // }, 1000);
    }

    useEffect(() => {
        dispatch(fetchAsyncRepos(accessToken))
        console.log('useEffect')
        return () => { }
    }, [dispatch])

    return <>
        {
            isLoaded ?
                (<Container maxW='container.xl' w='100%' h='calc(100vh - 80px)' padding={5}>
                    <Flex h='10%' padding={5} align='center' justify='flex-end'>
                        <Popover>
                            <PopoverTrigger>
                                {count === 0 ? (
                                    <Button mb={4} color='white' bgColor='brand.300' _hover={{ transform: 'scale(1.05)', bg: 'brand.300', textDecoration: 'none' }} _focus={{ outline: 'none' }}>
                                        ADD TOPIC
                                    </Button>) : (
                                    <Button mb={4} onClick={onOpen} color='white' bgColor='brand.500' _hover={{ transform: 'scale(1.05)', bg: 'brand.300', textDecoration: 'none' }} _focus={{ outline: 'none' }}>
                                        ADD TOPIC
                                    </Button>)
                                }
                            </PopoverTrigger>
                            {count === 0 &&
                                <PopoverContent>
                                    <PopoverArrow />
                                    <PopoverBody>You've selected no repository</PopoverBody>
                                </PopoverContent>
                            }
                        </Popover>

                        <ModalComponent isOpen={isOpen} onClose={onClose} onRemove={onRemove} onAdd={onAdd} />
                    </Flex>
                    <Flex h='85%' overflowY='scroll' scrollBehavior='smooth' direction='column' sx={{
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
                        <Fade bottom>{repoRender}</Fade>
                    </Flex>
                </Container>)
                : (
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
}

export default RepoListing

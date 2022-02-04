import { Button, Container, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverTrigger, Spinner, Text, useDisclosure } from '@chakra-ui/react'
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
    const [open, setOpen] = useState(false)
    let [count, setCount] = useState(0);
    let [selectedRepo, setSelectedRepo] = useState([]);

    const checkedRepoValue = (repo) => {
        const foundIndex = selectedRepo.findIndex(checkRepo => checkRepo.id.toString() === repo.id.toString())
        if (foundIndex === -1) {
            setSelectedRepo([...selectedRepo, repo])
            setCount(++count)
        } else {
            let tempRepo = [...selectedRepo]
            tempRepo.splice(foundIndex, 1)
            setSelectedRepo([...tempRepo])
            setCount(--count)
        }
    }

    const repoRender = repos.map((repo) => (
        <RepoCard key={repo.id} id={repo.id} name={repo.name} repo={repo} callback={checkedRepoValue} />
    ))

    const onAdd = (topics) => {
        onClose()
        updateRepoTopic(topics, 'add', accessToken, selectedRepo)
        setOpen(!open)
        setTimeout(() => {
            window.location.reload()
        }, 3000);
    }

    const onRemove = (topics) => {
        onClose()
        updateRepoTopic(topics, 'remove', accessToken, selectedRepo)
        setOpen(!open)
        setTimeout(() => {
            window.location.reload()
        }, 3000);
    }

    useEffect(() => {
        dispatch(fetchAsyncRepos(accessToken))
        return () => { }
    }, [dispatch, accessToken])

    return <>
        {
            isLoaded ?
                (<Container maxW='container.xl' w='100%' h='calc(100vh - 80px)' padding={5}>
                    <Flex h='10%' padding={5} align='center' justify='flex-end'>
                        <Popover>
                            <PopoverTrigger>
                                {count === 0 ? (
                                    <Button mb={{ base: '12px', md: '14px', lg: '16px' }} h={{ base: '36px', md: '40px', lg: '40px' }} w={{ base: '76px', md: '80px', lg: '80px' }} color='white' bgColor='brand.300' _hover={{ transform: 'scale(1.05)', bg: 'brand.300', textDecoration: 'none' }} _focus={{ outline: 'none' }}>
                                        <Text fontSize='12px'>ADD TOPIC</Text>
                                    </Button>) : (
                                    <Button mb={{ base: '12px', md: '14px', lg: '16px' }} h={{ base: '36px', md: '40px', lg: '40px' }} w={{ base: '76px', md: '80px', lg: '80px' }} onClick={onOpen} color='white' bgColor='brand.500' _hover={{ transform: 'scale(1.05)', bg: 'brand.300', textDecoration: 'none' }} _focus={{ outline: 'none' }}>
                                        <Text fontSize='12px'>ADD TOPIC</Text>
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
                        <Modal isOpen={open}>
                            <ModalOverlay />
                            <ModalContent p={5}>
                                <ModalCloseButton onClick={() => setOpen(!open)} />
                                <ModalBody>
                                    <Text textAlign='center'>The Topic update takes a while to reflect on this app,...but you can as well check it out on the repository github page by clicking the "REPO GITHUB PAGE" button</Text>
                                </ModalBody>
                            </ModalContent>
                        </Modal>
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

import { Button, Container, Flex, Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverTrigger, Spinner, useDisclosure } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncRepos, getLoader, getRepos, getUserData } from '../features/githubUser/githubUserSlice';
import ModalComponent from './Modal';
import RepoCard from './RepoCard';

const RepoListing = () => {
    const accessToken = useSelector(getUserData)?.token;
    const dispatch = useDispatch();
    const isLoaded = useSelector(getLoader);
    const repos = Object.values(useSelector(getRepos));
    const { isOpen, onOpen, onClose } = useDisclosure();
    let hasCount = false;

    const repoRender = repos.map((repo) => (
        <RepoCard key={repo.id} description={repo.description} id={repo.id} name={repo.name} node_id={repo.node_id} topics={repo.topics} url={repo.url} />
    ))

    const onAdd = (topics) => {
        onClose()
    }

    const onRemove = (topics) => {
        onClose()
    }

    useEffect(() => {
        dispatch(fetchAsyncRepos(accessToken))
        return () => { }
    }, [accessToken])

    return <>
        {
            isLoaded ?
                (<Container maxW='container.xl' w='100%' h='calc(100vh - 80px)' padding={5}>
                    <Flex h='10%' padding={5} align='center' justify='flex-end'>
                        <Popover>
                            <PopoverTrigger>
                                <Button onClick={!hasCount && onOpen} mb={4} color='white' bgColor={hasCount ? 'brand.500' : 'brand.300'} _hover={{ transform: 'scale(1.05)', bg: 'brand.300', textDecoration: 'none' }} _focus={{ outline: 'none' }}>
                                    ADD TOPIC
                                </Button>
                            </PopoverTrigger>
                            {!hasCount &&
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
                        {repoRender}
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

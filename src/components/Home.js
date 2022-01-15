import { Box, Button, Container, Flex, Image, Link, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Octokit } from "https://cdn.skypack.dev/@octokit/rest"
import { useSelector } from 'react-redux';
import { getUserData } from '../features/githubUser/githubUserSlice';
import { getRepos, initOctokit } from '../services/githubOctokit';

const Home = () => {
    const accessToken = useSelector(getUserData).token;
    console.log(accessToken)

    const asyncReposFetch = async () => {
        const octokit = await initOctokit(accessToken);
        getRepos(octokit)
    }

    accessToken && asyncReposFetch()

    // useEffect(() => {
    //     return () => { }
    // }, [])

    return (
        <Container maxW='container.xl' w='100%' h='calc(100vh - 80px)' padding={5}>
            <Flex wrap='wrap' py='8%' align='center' justify='center' borderRight='1px' borderTop='1px' borderColor='gray.200' boxShadow='base'>
                <Box p={8} marginRight={5} h='350px' w='350px' borderLeft='1px' borderBottom='1px' borderColor='gray.200' boxShadow='base'>
                    <Image src='/images/topic.svg' alt='Topic' />
                </Box>
                <Flex align='center' justify='center' direction='column'>
                    <Flex wrap='wrap' align='center' justify='center'>
                        <Text>Another Great Day To Create Splendid Topics...</Text>
                        <Text>Why not hop in let's get it started...😊</Text>
                    </Flex>
                <Text>Click on <Link>How It Works</Link> for additional information</Text>
                <Button textTransform='uppercase'>Login</Button>
            </Flex>
        </Flex>
        </Container >
    )
}

export default Home


// --text: #58585D;
// --text - dark: #161617;
// --primary: #665df5;
// --primary - dark: #544af4;
// --line: #efefef;
// --bg: #fff;
// --bg - alt: #fdfdfd;
// --font: "Mulish", sans - serif;
// --font - size: 16px;
// --radius: 4px;
// --weight - normal: 400;
// --weight - semi: 700;
// --weight - bold: 900;
// --container: 80 %;
// --container - max: 1356px;


// font - family: 'Mulish', sans - serif;
// font - family: 'Open Sans', sans - serif;
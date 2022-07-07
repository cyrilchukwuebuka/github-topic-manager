import React, { FC, useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './services/firebaseApp';
import { addUser, deleteUser } from './globalState/githubUser/githubUserSlice';
import { useDispatch } from 'react-redux';
import { Container, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/react'
import './App.css';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import RepoDetail from './pages/RepoDetail';
import HowItWorks from './pages/HowItWorks';
import Layout from './components/Layout';

export const TOKEN = 'token';

const App: FC<{}> = () => {
  const dispatch = useDispatch();
  const bgColor = useColorModeValue('themeLight.bg', 'themeDark.bgBody')
  const [isLargerThan310] = useMediaQuery('(min-width: 310px)')
  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        localStorage.removeItem(TOKEN);
        dispatch(deleteUser())
      } else {
        const token = localStorage.getItem(TOKEN)
        dispatch(addUser({ token, user }))
      }
    })
  }, [dispatch])

  return (
    <>
      {isLargerThan310 ?
        (<Container bg={bgColor} maxW='full' padding={0}>
          <Router>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='repo/:repoID' element={<RepoDetail />} />
                <Route path='how-it-works' element={<HowItWorks />} />
                <Route path='*' element={<PageNotFound />} />
              </Route>
            </Routes>
          </Router>
        </Container>)
        : (
          <Container maxW='full' padding={0} >
            <Flex direction='column' align='center' justify='center' py='20%' px='4%' h='100%' w='100%'>
              <Text textAlign='center' lineHeight={10} fontWeight='600'>Hello,...Welcome to TOPIC MANAGER</Text>
              <Text textAlign='center' lineHeight={10} fontStyle='italic'>It is advisable to use desktop mode or desktop screen to view the app as it is still in the development stage for the mobile responsiveness.</Text>
              <Text textAlign='center' lineHeight={10} fontStyle='italic'>We apologize for any inconveniences.</Text>
            </Flex>
          </Container>
        )
      }
    </>
  );
}

export default App;


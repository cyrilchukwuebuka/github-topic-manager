import React, { useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes, Outlet } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './services/firebaseApp';
import { addUser, deleteUser } from './features/githubUser/githubUserSlice';
import { useDispatch } from 'react-redux';
import { Container, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/react'
// component import
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import RepoDetail from './pages/RepoDetail';

export const TOKEN = 'token';

function App() {
  const dispatch = useDispatch();
  const bgColor = useColorModeValue('themeLight.bg', 'themeDark.bgBody')
  const [isLargerThan1082] = useMediaQuery('(min-width: 1082px)')

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        console.log('user deleted')
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
      {isLargerThan1082 ?
        (<Container bg={bgColor} maxW='full' padding={0}>
          <Router>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='repo/:repoID' element={<RepoDetail />} />
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

const Layout = () => {
  return (
    <>
      <Header />
      <main className='app__container'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

import React, { useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes, Outlet } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './services/firebaseApp';
import { deleteUser } from './features/githubUser/githubUserSlice';
import { useDispatch } from 'react-redux';
// component import
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';
import RepoDetail from './components/RepoDetail';
import { Container } from '@chakra-ui/react';


function App() {
  let dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(!user){
        console.log('user deleted')
        dispatch(deleteUser())
      }
    })
    // return () => {}
  }, [])

  return (
    <Container maxW='container.xl' padding={0}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='repo/:repoID' element={<RepoDetail />} />
            <Route path='*' element={<PageNotFound />} />
          </Route>
        </Routes>
      </Router>
    </Container>
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

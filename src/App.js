import React, { useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes, Outlet } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './services/firebaseApp';
import { addUser, deleteUser } from './features/githubUser/githubUserSlice';
import { useDispatch } from 'react-redux';
import { Container } from '@chakra-ui/react';
// component import
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import RepoDetail from './pages/RepoDetail';

export const TOKEN = 'token'

function App() {
  let dispatch = useDispatch();
  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(!user){
        console.log('user deleted')
        localStorage.removeItem(TOKEN);
        dispatch(deleteUser())
      } else {
        const token = localStorage.getItem(TOKEN)
        dispatch(addUser({ token, user }))
      }
    })
    // return () => {}
  }, [])

  return (
    <Container maxW='full' padding={0}>
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

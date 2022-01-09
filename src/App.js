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
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='repo/:repoID' element={<RepoDetail />} />
            <Route path='*' element={<PageNotFound />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

const Layout = () => {
  return (
    <div className='app__layout'>
      <Header />
      <main className='app__container'>
        {/* App
        <button onClick={firebaseSignInWithPopup}>login</button>
        <button onClick={firebaseSignOut}>signout</button> */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

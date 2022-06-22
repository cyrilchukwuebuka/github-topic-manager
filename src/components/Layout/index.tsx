import React, { FC } from 'react'
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';

const Layout: FC<{}> = () => {
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

export default Layout
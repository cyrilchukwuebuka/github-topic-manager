import React, { FC } from 'react'
import { useSelector } from 'react-redux';
import LandingComp from '../components/LandingComp';
import RepoListing from '../components/RepoListing';
import { getUserData } from '../features/githubUser/githubUserSlice';

const Home: FC<{}> = () => {
    const accessToken = useSelector(getUserData)?.token;

    let render = accessToken ? (
        <RepoListing />
    ) : (
        <LandingComp />
    )

    return <>
        {render}
    </>
}

export default Home;

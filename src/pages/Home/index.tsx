import React, { FC } from 'react';
import { useAppSelector } from 'src/globalState/stateHooks';
import LandingComp from '../../components/LandingComp';
import RepoListing from '../../components/RepoListing';
import { getUserData } from '../../globalState/githubUser/githubUserSlice';

const Home: FC<{}> = () => {
    const accessToken = useAppSelector(getUserData)?.token;

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

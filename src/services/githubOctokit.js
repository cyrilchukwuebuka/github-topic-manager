import { Octokit } from "https://cdn.skypack.dev/@octokit/rest"
// import { useSelector } from "react-redux";
import { getUserData } from "../features/githubUser/githubUserSlice";


const initOctokit = (accessToken) => {
    // const accesskToken = useSelector(getUserData);
    const octokit = new Octokit({
        auth: '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'
        // auth: accessToken
    });


    // !getUserData && 
    
    // console.log(data)

    return octokit;
}

const getRepos = async (octokit) => {
    let repos;

    await octokit.rest.repos.listForAuthenticatedUser({ sort: 'created' })
        .then(data => {
            repos = data;
            // console.log(data.data)
        })
        console.log(repos)
    return repos;
}

export { initOctokit, getRepos }
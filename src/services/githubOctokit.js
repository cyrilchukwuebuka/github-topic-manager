import { Octokit } from "https://cdn.skypack.dev/@octokit/rest";


const initOctokit = (accessToken) => {
    const octokit = new Octokit({
        auth: accessToken
    });
    console.log(octokit)
    return octokit;
}

// const getRepos = async (octokit) => {
//     const data = await octokit.rest.repos.listForAuthenticatedUser({ sort: 'created' });
//     const repos = data.data
//     return repos;
// }

export { initOctokit }
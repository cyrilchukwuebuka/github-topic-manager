import { Octokit } from "https://cdn.skypack.dev/@octokit/rest";
import { paginateRest } from "https://cdn.skypack.dev/@octokit/plugin-paginate-rest";

const MyOctokit = Octokit.plugin(paginateRest)

const initOctokit = (accessToken) => {
    const octokit = new MyOctokit({
        auth: accessToken
    });
    return octokit;
}

export { initOctokit }

import { Octokit } from "@octokit/rest";
import { paginateRest } from "@octokit/plugin-paginate-rest";

const MyOctokit = Octokit.plugin(paginateRest)

const initOctokit = (accessToken) => {
    const octokit = new MyOctokit({
        auth: accessToken
    });
    return octokit;
}

export { initOctokit }

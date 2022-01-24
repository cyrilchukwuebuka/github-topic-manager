import { initOctokit } from "./githubOctokit";

const replaceTopicsInRepo = async (accessToken, repo, topics) => {
    const octokit = await initOctokit(accessToken);
    octokit.rest.repos.replaceAllTopics({
        owner: repo.owner.login,
        repo: repo.name,
        names: topics
    });
}

const add = (accessToken, repo, topics) => {
    let repoTopics = repo.topics.concat(topics)
    console.log(repoTopics, repo.name)
    replaceTopicsInRepo(accessToken, repo, repoTopics)
}

const remove = (accessToken, repo, topics) => {
    let repoTopics = [...repo.topics]
    topics.forEach(topic => {
        let foundIndex = repoTopics.findIndex(item => item.toString() === topic.toString())
        repoTopics.splice(foundIndex, 1)
    })
    console.log(repoTopics, repo.name)

    replaceTopicsInRepo(accessToken, repo, repoTopics)
 }

export const TYPES = {
    add,
    remove
}

export const updateRepoTopic = (topics, type = '', accessToken, reposArray) => {
    console.log(reposArray)
    if (topics !== '') {
        const topicsArray = topics.match(/[^ , ]+/gi)
            .map(topic => topic.toLowerCase())
        console.log(topicsArray)

        for (let iteration = 0; iteration < reposArray.length; iteration++) {
            TYPES[type](accessToken, reposArray[iteration], topicsArray);
        }
    }
}
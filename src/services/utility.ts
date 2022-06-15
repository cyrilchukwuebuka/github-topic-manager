import { initOctokit } from "./githubOctokit";

const replaceTopicsInRepo = async (
  accessToken: string,
  repo,
  topics: string[]
) => {
  const octokit = await initOctokit(accessToken);
  octokit.rest.repos.replaceAllTopics({
    owner: repo.owner.login,
    repo: repo.name,
    names: topics,
  });
};

const add = (accessToken: string, repo, topics: string[]) => {
  let repoTopics = repo.topics.concat(topics);
  console.log(repoTopics, repo.name);
  replaceTopicsInRepo(accessToken, repo, repoTopics);
};

const remove = (accessToken: string, repo, topics: string[]) => {
  let repoTopics = [...repo.topics];
  topics.forEach((topic) => {
    let foundIndex = repoTopics.findIndex(
      (item) => item.toString() === topic.toString()
    );
    repoTopics.splice(foundIndex, 1);
  });
  console.log(repoTopics, repo.name);

  replaceTopicsInRepo(accessToken, repo, repoTopics);
};

export const TYPES = {
  add,
  remove,
};

export const updateRepoTopic = (
  topics: string | null,
  type = "",
  accessToken: string,
  reposArray: any[]
) => {
  if (topics !== "" && topics != null) {
    const matchedTopices: string[] | null = topics.match(/[^ , ]+/gi);
    const topicsArray: string[] =
      matchedTopices && matchedTopices.length !== 0
        ? matchedTopices.map((topic: string) => topic.toLowerCase())
        : [];
    console.log(topicsArray);

    for (let iteration = 0; iteration < reposArray.length; iteration++) {
      TYPES[type](accessToken, reposArray[iteration], topicsArray);
    }
  }
};

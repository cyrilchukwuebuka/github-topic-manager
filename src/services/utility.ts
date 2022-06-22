import initOctokit, { CreateRepoResponseType } from "./githubOctokit";

type Repo = Partial<CreateRepoResponseType['data']>
type FuncArgs = (accessToken: string, repo: Repo, topics: string[]) => void;

const replaceTopicsInRepo = async (
  accessToken: string,
  repo: Repo,
  topics: string[]
) => {
  const octokit: ReturnType<typeof initOctokit> = initOctokit(
    accessToken
  );
  octokit.rest.repos.replaceAllTopics({
    owner: repo!.owner!.login,
    repo: repo.name as string,
    names: topics,
  });
};

const add = (accessToken: string, repo: Repo, topics: string[]) => {
  let repoTopics = repo!.topics!.concat(topics);
  replaceTopicsInRepo(accessToken, repo, repoTopics);
};

const remove = (accessToken: string, repo: Repo, topics: string[]) => {
  let repoTopics = repo.topics !== undefined ? [...repo.topics] : []
  topics.forEach((topic) => {
    let foundIndex = repoTopics.findIndex(
      (item) => item.toString() === topic.toString()
    );
    repoTopics.splice(foundIndex, 1);
  });

  replaceTopicsInRepo(accessToken, repo, repoTopics);
};

export const TYPES: Record<string, FuncArgs> = {
  add,
  remove,
};

export const updateRepoTopic = (
  topics: string | "",
  type: string = "",
  accessToken: string,
  reposArray: Repo[]
) => {
  if (topics !== "") {
    const matchedTopices: string[] | null = topics.match(/[^ , ]+/gi);
    const topicsArray: string[] =
      matchedTopices && matchedTopices.length !== 0
        ? matchedTopices.map((topic: string) => topic.toLowerCase())
        : [];

    for (let iteration = 0; iteration < reposArray.length; iteration++) {
      TYPES[type](accessToken, reposArray[iteration], topicsArray);
    }
  }
};

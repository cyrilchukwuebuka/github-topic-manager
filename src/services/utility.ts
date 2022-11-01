import initOctokit from "./githubOctokit";
import type { GraphQlQueryResponseData } from "@octokit/graphql";
import OctokitGraphQLEndpoints from "../api/graphqlApiEndpoints";

type Repo = GraphQlQueryResponseData;
type FuncArgs = (accessToken: string, repo: Repo, topics: string[]) => void;

const replaceTopicsInRepo = async (
  accessToken: string,
  repo: Repo,
  topics: string[]
) => {
  if (topics.length === 0) topics = [""];
  const octokit = initOctokit(accessToken);

  await new OctokitGraphQLEndpoints(octokit).updateTopicsMutation(
    repo,
    topics
  );
};

const add = (accessToken: string, repo: Repo, topics: string[]) => {
  const repoTopics = repo.repositoryTopics.edges
    .map((topicNode: Repo) => topicNode.node.topic.name)
    .concat(topics);
  replaceTopicsInRepo(accessToken, repo, repoTopics);
};

const remove = (accessToken: string, repo: Repo, topics: string[]) => {
  const currentTopics = repo.repositoryTopics.edges.map(
    (topicNode: Repo) => topicNode.node.topic.name
  );
  const repoTopics = currentTopics !== undefined ? [...currentTopics] : [];
  topics.forEach((topic) => {
    const foundIndex = repoTopics.findIndex(
      (item) => item.toString() === topic.toString()
    );

    foundIndex !== -1 && repoTopics.splice(foundIndex, 1);
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

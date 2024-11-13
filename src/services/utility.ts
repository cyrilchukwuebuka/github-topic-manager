import initOctokit from "./githubOctokit";
import type { GraphQlQueryResponseData } from "@octokit/graphql";
import OctokitGraphQLEndpoints from "../api/graphqlApiEndpoints";
import axios from "axios";
import { TOKEN } from "src/App";
// import OpenAI from "openai";

// const client = new OpenAI({
//   apiKey: process.env.REACT_APP_OPENAI_API_KEY,
//   dangerouslyAllowBrowser: true,
// });

type Repo = GraphQlQueryResponseData;
type FuncArgs = (accessToken: string, repo: Repo, topics: string[]) => void;

const replaceTopicsInRepo = async (
  accessToken: string,
  repo: Repo,
  topics: string[]
) => {
  if (topics.length === 0) topics = [""];
  const octokit = initOctokit(accessToken);

  await new OctokitGraphQLEndpoints(octokit).updateTopicsMutation(repo, topics);
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

export const recommendTopicsForRepo = async (
  repoTitle: string,
  repoDescription: string
) => {
  const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

  if (!repoTitle && !repoDescription) return [];

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo", // or 'gpt-4' if you prefer
      messages: [
        {
          role: "system",
          content:
            "You are an expert in categorizing GitHub repositories into relevant topics based on their descriptions.",
        },
        {
          role: "user",
          content: `Analyze the following GitHub repository topic and description and suggest appropriate topics:\n\n"Title: ${repoTitle}"\n"Description: ${repoDescription}"`,
        },
      ],
      max_completion_tokens: 10,
    }),
  });

  // const completion = await openai.chat.completions.create({
  //   model: "gpt-3.5-turbo", // or 'gpt-4' if you prefer
  //   messages: [
  //     {
  //       role: "system",
  //       content:
  //         "You are an expert in categorizing GitHub repositories into relevant topics based on their descriptions.",
  //     },
  //     {
  //       role: "user",
  //       content: `Analyze the following GitHub repository topic and description and suggest appropriate topics:\n\n"Title: ${repoTitle}"\n"Description: ${repoDescription}"`,
  //     },
  //   ],
  // });

  const data = await response.json();
  if (data.choices > 0) {
    const topics = data.choices[0]?.message?.content?.trim();
    return topics.split(",").map((topic: string) => topic.trim());
  } else {
    return []
  }
};

export const getTrendingRepositoriesTopics = async () => {
  const accessToken = localStorage.getItem(TOKEN);

  const response = await axios.get(
    "https://api.github.com/search/repositories?q=stars:>100000&sort=stars&order=desc&per_page=50",
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: "application/vnd.github.mercy-preview+json",
      },
    }
  );

  const topics = new Set<string>();
  response.data.items.map((repo: any) => {
    repo.topics.forEach((topic: string) => {
      topics.add(topic);
    });
  });

  return Array.from(topics);
};

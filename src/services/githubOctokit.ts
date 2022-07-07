import { graphql } from "@octokit/graphql";

const initOctokit = (accessToken: string) => {
  const octokit = graphql.defaults({
    headers: {
      authorization: `token ${accessToken}`
    }
  });

  return octokit;
};

export type Octokit = ReturnType<typeof initOctokit>

export default initOctokit;

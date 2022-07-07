import { GraphQlQueryResponseData } from "@octokit/graphql";
import { Octokit } from "src/services/githubOctokit";

class OctokitGraphQLEndpoints {
  constructor(private readonly octokit: Octokit) {}

  async updateTopicsMutation(repo: GraphQlQueryResponseData, topics: string[]) {
    await this.octokit({
      query: `mutation UpdateTopics($repositoryId: ID!, $topicNames: [String!]!) {
          updateTopics(input: {repositoryId: $repositoryId, topicNames: $topicNames}) {
            clientMutationId
            invalidTopicNames
            repository {
              id
              name
              description
              url
              nameWithOwner
              repositoryTopics(first: 20) {
                edges {
                  node {
                    id
                    topic {
                      id
                      name
                    }
                  }
                }
              }
            }
          }
        }`,
      repositoryId: repo.id,
      topicNames: topics,
    });
  }

  async getRepositoriesQuery(page = 100) {
    const data: GraphQlQueryResponseData = await this.octokit({
      query: `query Repositories($first: Int!) {
          viewer {
            id
            repositories(first:$first, orderBy: {field:CREATED_AT, direction: DESC}) {
            pageInfo {hasNextPage, endCursor}
            nodes {
                id
                name
                url
                owner {
                  login
                }
              }
            }
          }
        }`,
      first: page,
    });

    return data;
  }

  async getRepositoryQuery(owner: string, name: string) {
    const data: GraphQlQueryResponseData = await this.octokit({
      query: `query Repository($name: String!, $owner: String!) {
              repository(name: $name, owner: $owner) {
                id
                name
                description
                url
                nameWithOwner
                repositoryTopics(first: 20) {
                  edges {
                    node {
                      id
                      topic {
                        id
                        name
                      }
                    }
                  }
                }
              }
            }
          `,
      name,
      owner,
    });

    return data;
  }
}

export default OctokitGraphQLEndpoints;

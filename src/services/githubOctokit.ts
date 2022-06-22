import { Octokit } from "@octokit/rest";
import { paginateRest } from "@octokit/plugin-paginate-rest";
import { GetResponseTypeFromEndpointMethod } from "@octokit/types";

const restOctokit = new Octokit();
const MyOctokit = Octokit.plugin(paginateRest);

const initOctokit = (accessToken: string) => {
  const octokit = new MyOctokit({
    auth: accessToken,
  });
  return octokit;
};

export type CreateRepoResponseType = GetResponseTypeFromEndpointMethod<
  typeof restOctokit.rest.repos.get
>;

// type CreateLabelResponseDataType = GetResponseDataTypeFromEndpointMethod<
//   typeof restOctokit.rest.repos.get
// >;

export default initOctokit;

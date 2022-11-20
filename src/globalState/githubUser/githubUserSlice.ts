import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { GraphQlQueryResponseData } from "@octokit/graphql";
import initOctokit from "../../services/githubOctokit";
import { RootState } from "../reducerTypes";
import OctokitGraphQLEndpoints from "../../api/graphqlApiEndpoints";

interface AsyncThunkParameter {
  accessToken: string;
  owner: string;
  repoName: string;
  pageNo?: number;
}

interface InitialState {
  userData: Record<string, any>;
  isLoaded: boolean;
  repos: GraphQlQueryResponseData;
  repo: GraphQlQueryResponseData;
}

const initialState: InitialState = {
  userData: {},
  isLoaded: false,
  repos: {},
  repo: {},
};

export const fetchAsyncRepos = createAsyncThunk(
  "githubUser/fetchAsyncRepos",
  async (accessToken: AsyncThunkParameter["accessToken"]) => {
    const octokit = initOctokit(accessToken);
    const data: GraphQlQueryResponseData = await new OctokitGraphQLEndpoints(
      octokit
    ).getRepositoriesQuery();

    return data;
  }
);

export const fetchAsyncRepo = createAsyncThunk(
  "githubUser/fetchAsyncRepo",
  async ({ accessToken, owner, repoName }: AsyncThunkParameter) => {
    const octokit = initOctokit(accessToken);
    const data: GraphQlQueryResponseData = await new OctokitGraphQLEndpoints(
      octokit
    ).getRepositoryQuery(owner, repoName);

    return data.repository;
  }
);

const githubUserSlice = createSlice({
  name: "githubUser",
  initialState,
  reducers: {
    addUser: (state, { payload }) => {
      state.userData = payload;
    },
    removeFetchedRepo: (state) => {
      return { ...state, repo: {} };
    },
    deleteUser: (state) => {
      return {
        ...state,
        userData: {},
        isLoaded: false,
        repos: [],
        selectedRepo: [],
        repoDetail: {},
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncRepos.pending, (state) => {
      state.isLoaded = false;
    });
    builder.addCase(fetchAsyncRepos.fulfilled, (state, { payload }) => {
      state.repos = { ...payload };
      state.isLoaded = true;
    });
    builder.addCase(fetchAsyncRepo.fulfilled, (state, { payload }) => {
      state.repo = { ...payload };
      state.isLoaded = true;
    });
    builder.addCase(fetchAsyncRepos.rejected, (state) => {
      // console.log(state);
    });
  },
});

export const { addUser, removeFetchedRepo, deleteUser } =
  githubUserSlice.actions;
export const getUserData = (state: RootState) => state.githubUsers.userData;
export const getRepos = (state: RootState) => state.githubUsers.repos;
export const getRepo = (state: RootState) => state.githubUsers.repo;
export const getLoader = (state: RootState) => state.githubUsers.isLoaded;
export default githubUserSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { initOctokit } from "../../services/githubOctokit";

const initialState = {
    userData: {},
    isLoaded: false,
    repos: [],
    repo: {}
};

export const fetchAsyncRepos = createAsyncThunk('githubUser/fetchAsyncRepos', async (accessToken) => {
    const octokit = await initOctokit(accessToken);
    const data = await octokit.paginate(octokit.rest.repos.listForAuthenticatedUser, { sort: 'created' });
    console.log(data)

    return data
})

// export const replaceTopicsInRepo = createAsyncThunk('githubUser/replaceTopicsInRepo', async ({accessToken, repo, topics}) => {
//     const octokit = await initOctokit(accessToken);
//     octokit.rest.repos.replaceAllTopics({
//         owner: repo.owner.login,
//         repo: repo.name,
//         names: topics
//     });

//     return []
// })

export const fetchAsyncRepo = createAsyncThunk('githubUser/fetchAsyncRepo', async ({ accessToken, owner, repoName }) => {
    console.log(accessToken, owner, repoName)
    const octokit = await initOctokit(accessToken);
    const { data } = await octokit.rest.repos.get({
        owner: owner,
        repo: repoName,
    });
    console.log(data)

    return data
})

const githubUserSlice = createSlice({
    name: 'githubUser',
    initialState,
    reducers: {
        addUser: (state, { payload }) => {
            state.userData = payload;
        },
        removeFetchedRepo: (state) => {
            return { ...state, repo: {} }
        },
        deleteUser: (state) => {
            return {
                ...state,
                userData: {},
                isLoaded: false,
                repos: [],
                selectedRepo: [],
                repoDetail: {}
            }
        }
    },
    extraReducers: {
        [fetchAsyncRepos.pending]: (state, { payload }) => {
            state.isLoaded = false;
        },
        [fetchAsyncRepos.fulfilled]: (state, { payload }) => {
            state.repos = { ...payload };
            state.isLoaded = true;
        },
        [fetchAsyncRepo.fulfilled]: (state, { payload }) => {
            console.log(payload)
            state.repo = { ...payload };
            state.isLoaded = true;
        },
        // [replaceTopicsInRepo.fulfilled]: (state, { payload }) => {
        //     console.log(payload)
        //     state.repo = { ...payload };
        //     state.isLoaded = true;
        // },
        [fetchAsyncRepos.rejected]: (state, { payload }) => {
            console.log('rejected')
        }
    }
});

export const { addUser, removeFetchedRepo, deleteUser } = githubUserSlice.actions;
export const getUserData = (state) => state.githubUsers.userData;
export const getRepos = (state) => state.githubUsers.repos;
export const getRepo = (state) => state.githubUsers.repo;
export const getLoader = (state) => state.githubUsers.isLoaded;
export default githubUserSlice.reducer;
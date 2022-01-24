import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { initOctokit } from "../../services/githubOctokit";

const initialState = {
    userData: {},
    isLoaded: false,
    repos: []
};

export const fetchAsyncRepos = createAsyncThunk('githubUser/fetchAsyncRepos', async (accessToken) => {
    const octokit = await initOctokit(accessToken);
    const data = await octokit.paginate(octokit.rest.repos.listForAuthenticatedUser, { sort: 'created' });
    console.log(data)

    return data
})

const githubUserSlice = createSlice({
    name: 'githubUser',
    initialState,
    reducers: {
        addUser: (state, { payload }) => {
            state.userData = payload;
            console.log(state.userData)
        },
        addRepos: (state, { payload }) => {
            return { ...state, repos: payload, loader: false }
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
            console.log('pending')
            state.isLoaded = false;
        },
        [fetchAsyncRepos.fulfilled]: (state, { payload }) => {
            state.repos = { ...payload };
            state.isLoaded = true;
            console.log('fulfilled', payload)
            // return { ...state, repos: payload, loader: false }
        },
        [fetchAsyncRepos.rejected]: (state, { payload }) => {
            console.log('rejected')
        }
    }
});

export const { addUser, addRepos, deleteUser, replaceRepoTopics } = githubUserSlice.actions;
export const getUserData = (state) => state.githubUsers.userData;
export const getRepos = (state) => state.githubUsers.repos;
export const getLoader = (state) => state.githubUsers.isLoaded;
export default githubUserSlice.reducer;
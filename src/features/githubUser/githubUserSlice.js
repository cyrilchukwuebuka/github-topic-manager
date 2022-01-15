import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    UserData: {},
    loader: false,
    repos: [],
    selectedRepo: [],
    repoDetail: {},
};



const githubUserSlice = createSlice({
    name: 'githubUser',
    initialState,
    reducers: {
        addUser: (state, { payload }) => {
            return {...state, UserData: payload}
        },
        addRepos: (state, { payload }) => {
            return {...state, repos: payload}
        },
        deleteUser: (state) => {
            return {
                ...state,
                UserData: {},
                loader: false,
                selectedRepo: [],
                repoDetail: {}
            }
        }
    }
});

export const { addUser, addRepos, deleteUser } = githubUserSlice.actions;
export const getUserData = (state) => state.githubUsers.UserData;
// export const getToken = (state) => state.githubUser.UserData.token;
export default githubUserSlice.reducer;
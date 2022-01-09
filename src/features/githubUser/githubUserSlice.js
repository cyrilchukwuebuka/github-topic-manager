import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    UserData: {},
    loader: false,
    selectedRepo: [],
    repoDetail: {},
};

const githubUserSlice = createSlice({
    name: 'GitHubUser',
    initialState,
    reducers: {
        addUser: (state, { payload }) => {
            return {...state, UserData: payload}
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

export const { addUser, deleteUser } = githubUserSlice.actions;
export const getUserData = (state) => state.githubUser.UserData;
// export const getToken = (state) => state.githubUser.UserData.token;
export default githubUserSlice.reducer;
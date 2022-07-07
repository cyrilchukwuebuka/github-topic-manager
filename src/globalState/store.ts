import { configureStore } from "@reduxjs/toolkit";
import githubUserReducer from "./githubUser/githubUserSlice";

const store = configureStore({
    reducer: {
        githubUsers: githubUserReducer
    }
})

export default store;
import { configureStore } from "@reduxjs/toolkit";
import githubUserReducer from "./githubUser/githubUserSlice";

export const store = configureStore({
    reducer: {
        githubUser: githubUserReducer
    }
})
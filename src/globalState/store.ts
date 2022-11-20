import {
  configureStore,
  PreloadedState,
  combineReducers,
} from "@reduxjs/toolkit";
import githubUserReducer from "./githubUser/githubUserSlice";
import { RootState } from "./reducerTypes";

export const rootReducer = combineReducers({
  githubUsers: githubUserReducer,
});

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}

